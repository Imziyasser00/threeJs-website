import React from 'react'
import CustomButton from './CustomButton'
const FilePicker = ({file, setFile, readFile}) => {
  return (
    <div className='filepicker-container'>
      <div className="flex-1 flex flex-col">
        <input 
          id='file-upload'
          type='file'
          accept='image/*'
          onChange={(e)=> setFile(r.target.files[0])}
        />
        <label htmlFor='file-upload' className='filepicker-label  '>
          <div className="text-gray-200">Upload File</div>
        </label>

        <p className='mt-2 text-gray-200 '>
          {file === ''? "No file selected": file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton 
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomButton 
          type="filled"
          title="full"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker
