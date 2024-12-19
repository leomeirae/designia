import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function AdditionalReq({additionalRequirementInput}) {
  return (
    <div className='mt-5'>
        <label className='text-gray-400' style={{ color: 'rgb(127 87 241 / var(--tw-text-opacity))' }}>
            Gostaria de solicitar algo adicional? (Opcional)
        </label>
        <Textarea className="mt-2" onChange={(e)=>additionalRequirementInput(e.target.value)} />
    </div>
  )
}

export default AdditionalReq