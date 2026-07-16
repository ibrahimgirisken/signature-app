'use client'
import LanguageForm from '@/features/languague/components/LanguageForm'
import { langService } from '@/services/lang.service';
import { localizationService } from '@/services/localization.service';
import { Lang } from '@/types/lang';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function LanguagesDataPage() {
    const [loading, setLoading] = useState<boolean>(true);
    const [languages, setLanguages] = useState<Lang[]>([]);

    const { register, handleSubmit, reset, watch, setValue } = useForm<Record<string, any>>({
        defaultValues: {}
    });

    useEffect(() => {
        const loadLanguagesAndLocalization = async () => {
            try {
                setLoading(true);
                const langsData = await langService.getAll();
                setLanguages(langsData);

                const allLocalizationData: Record<string, any> = {};

                await Promise.all(
                    langsData.map(async (lang) => {
                        const data = await localizationService.getLocalization(lang.langCode);
                        allLocalizationData[lang.langCode] = data;
                    })
                );

                reset(allLocalizationData);
            } catch (error) {
                console.error("Dil verileri yüklenirken bir hata oluştu:", error);
            } finally {
                setLoading(false);
            }
        };
        loadLanguagesAndLocalization();
    }, [reset]);

    const onSubmit = async (formData: Record<string, any>) => {
        const alertify = (await import('alertifyjs')).default;
        try {
            console.log("Kaydedilecek Veriler:", formData);

            await Promise.all(
                Object.keys(formData).map(async (langCode) => {
                    const translations = formData[langCode];
                    await localizationService.updateLocalization(translations, langCode);
                })
            );


            alertify.set("notifier", "position", "top-center");
            alertify.success("Tüm dil dosyaları başarıyla güncellendi! ✅");
        } catch (error) {
            console.error("Güncelleme sırasında hata oluştu:", error);
            alertify.set("notifier", "position", "top-center");
            alertify.error("Dil dosyaları güncellenirken bir hata oluştu.");
        }
    };

    if (loading) {
        return <div className="p-4 text-center text-muted">Dil verileri yükleniyor...</div>;
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="mb-0 text-dark fw-bold">Dil Bazlı Metin Yönetimi</h4>
                <Button type="submit" variant="success" className="px-4 fw-bold shadow-sm">
                    Değişiklikleri Kaydet
                </Button>
            </div>

            <LanguageForm
                languages={languages}
                register={register}
                watch={watch}
                setValue={setValue}
            />
        </Form>
    );
}