'use client'
import { useRef, useState } from "react"

export default function Download() {
    const [images, setImages] = useState([])
    const downloadFormRef = useRef()

    const handleDownloadForm = (event) => {
        event.preventDefault()

        const formData = new FormData(downloadFormRef.current)
        const file = formData.get('downloadInput')
        const url = URL.createObjectURL(file)
        setImages((prevState) => [...prevState, {id: Date.now(), url}])
    }

    return (<>
        <form action="" className="downloadForm" onSubmit={handleDownloadForm} ref={downloadFormRef}>
            <input type="file" name="downloadInput" id="" accept="image/*" />
            <button>загрузить</button>
        </form>
        {images && images.map((image) => {
            return <img key={image.id} src={image.url} height={100} width='auto' />
        })}
    </>)
}