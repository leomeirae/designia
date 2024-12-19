import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function AdditionalReq({additionalRequirementInput}) {
  return (
    <div className='mt-5'>
        <label 
          className='text-[#1a1a1a] hover:text-[rgb(127,87,241)] font-bold transition-colors' 
          style={{ color: 'inherit' }}
        >
            Gostaria de solicitar algo adicional? (Opcional)
        </label>
        <Textarea className="mt-2" onChange={(e)=>additionalRequirementInput(e.target.value)} />
    </div>
  )
}

export default AdditionalReq