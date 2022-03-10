import React,{useState} from "react";
import {useDropzone} from 'react-dropzone';



class Componente extends Component{
    //Permite rendeizar el código js
    render(){
        const [files, setFiles] = useState([])

        const { getRootProps, getInputProps } = useDropzone({
            accept: "image/*",
            onDrop: (acceptedFiles) => {
                setFiles(
                    acceptedFiles.map((file) => Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    }))
                )
            }
        })
        const images = files.map((file) => (
            <div key = {file.name}>
                <div>
                    <img src = { file.preview } style = {{ width: "200px" }} alt = "preview" />
                </div>
            </div>
        ))

        return(
            <div>
                <div {...getInputProps()}>
                    <input {...getInputProps()}/>
                    <p>
                       Drop files here
                    </p>
                </div>
                <div>{images}</div>
            </div>
            

        );
    }
}

export default Componente;