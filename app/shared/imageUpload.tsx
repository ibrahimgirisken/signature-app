'use client'
import { useEffect, useState } from 'react'
import { Button, Form, Image } from 'react-bootstrap'

type Props = {
    name: string
    value?: string
    label?: string
    onChange: (name: string, value: string) => void
}

export default function ImageUpload({ name, value, label = 'Görsel', onChange }: Props) {
    const [preview, setPreview] = useState(
        value ? `/uploads/component-images/${value}` : ''
    )

    useEffect(() => {
        if (value) {
            setPreview(`/uploads/component-images/${value}`)
        }
    }, [value]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
            {preview && (<>
                <div className="mt-2">
                    <Image
                        src={preview}
                        width={200}
                        height={200}
                        style={{ objectFit: 'contain', border: '1px solid #ddd' }}
                        alt="Önizleme"
                    />
                </div>
                <div className="mt-2">
                    <Button variant='danger' name={name} onClick={(e) => {
                        const fieldName = e.currentTarget.name
                        setPreview('')
                        onChange(fieldName, '')
                    }} >Görseli Sil</Button>
                </div>
            </>
            )}
        </Form.Group>
    )
}
