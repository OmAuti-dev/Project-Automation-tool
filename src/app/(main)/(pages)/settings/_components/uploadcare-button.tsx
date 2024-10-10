"use client"
import React, { useEffect, useRef } from 'react'
import * as LR from '@uploadcare/blocks'
import "@uploadcare/react-uploader/core.css"

import { useRouter } from 'next/navigation'
type Props = {
    onUpload?:(e: string) => any
}

LR.registerBlocks(LR)

const UploadCareButton = ({onUpload}: Props) => {
    const router = useRouter()
    const ctxProviderRef = useRef<typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider>(null)

    useEffect(() => {
        const handleUpload = async (e: any) => {
            const file = await onUpload(e.detail.cdnUrl)
            if(file){
                router.refresh()
            }
         }
         ctxProviderRef.current?.addEventListener('file-upload-success',handleUpload)
    },[])

  return (
    <div>
        <lr-config 
        ctx-name='my-uploader'
        pubkey='410fda400908ca057db9'/>
         <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://ucarecdn.com/75a13b93-0ff3-4404-9d74-9e754e2d7c94/-/preview/auto/`}
      />
    <lr-upload-ctx-provider
    ref={ctxProviderRef}
    ctx-name="my-uploader"/>
    </div>
  )
}

export default UploadCareButton