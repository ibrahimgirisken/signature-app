'use client'
import React, { useEffect, useState } from 'react'
import { http } from '@/lib/http'
import { useParams } from 'next/navigation'
import ImageUpload from '@/app/shared/imageUpload';
import { CompanyComponentResponse } from '@/types/company';

type CompanyComponentFormProps = {
    initialData?: CompanyComponentResponse[],
    onChange?: (data: CompanyComponentResponse[]) => void
}

function CompanyComponentForm({ initialData, onChange }: CompanyComponentFormProps) {
    const params = useParams();
    const companyId = params.id as string;
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState<CompanyComponentResponse[]>([]);
    useEffect(() => {
        const fetchAndMergeData = async () => {
            try {
                const res = await http.get('/Enums/signature-asset-types');
                const enums = res.data;

                const mergedData = enums.map((enumItem: any) => {
                    const existingRecord = initialData?.find(d => d.type === enumItem.name);
                    return existingRecord ? { ...existingRecord,isNew: false } : {
                        label: enumItem.name,
                        imageUrl: '',
                        targetUrl: '',
                        type: enumItem.name,
                        order: 1,
                        isActive: true,
                        companyId: companyId,
                        isNew: true
                    };
                });
                setFormData(mergedData);
                if (onChange) onChange(mergedData);
            } catch (error) {
                console.error("Veriler alınırken hata oluştu", error);
            } finally {
                setLoading(false);
            }
        };
        if (formData.length === 0) {
            fetchAndMergeData();
        }
    }, [companyId,initialData]); // initialData değişirse (örn: API'den geç gelirse) tekrar çalışır

    const handleInputChange = (index: number, field: string, value: any) => {
        const updatedForm = [...formData];
        updatedForm[index] = { ...updatedForm[index], [field]: value };
        setFormData(updatedForm);

        if (onChange) onChange(updatedForm);
    };

    if (loading) return <p className="p-10 text-center text-gray-500">Bileşenler hazırlanıyor...</p>;

    return (
        <div className="mx-auto p-4 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {formData.map((item, index) => (
                    <div key={item.type} className="p-4 bg-white border rounded-lg shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                                    {item.label}
                                </span>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={item.isActive}
                                        onChange={(e) => handleInputChange(index, 'isActive', e.target.checked)}
                                    />
                                    <span className="text-xs text-gray-400">Aktif</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <input
                                    placeholder="Başlık (Label)"
                                    className="w-full p-2 border rounded text-sm outline-none focus:ring-1 focus:ring-blue-500 bg-gray-50"
                                    value={item.label}
                                    onChange={(e) => handleInputChange(index, 'label', e.target.value)}
                                />
                                <input
                                    placeholder="Yönlendirilecek URL (targetUrl)"
                                    className="w-full p-2 border rounded text-sm outline-none focus:ring-1 focus:ring-blue-500 bg-gray-50"
                                    value={item.targetUrl}
                                    onChange={(e) => handleInputChange(index, 'targetUrl', e.target.value)}
                                />

                                <div className="mt-3">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase">Görsel Yükle</label>
                                    <ImageUpload
                                        name={`image-${index}`}
                                        value={item.imageUrl || ''}
                                        onChange={(_, val) => handleInputChange(index, 'imageUrl', val)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CompanyComponentForm;