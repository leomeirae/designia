import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function RoomType({selectedRoomType}) {
    return (
        <div className='mt-5'>
            <label 
                className='text-[#1a1a1a] hover:text-[rgb(127,87,241)] font-bold transition-colors' 
                style={{ color: 'inherit' }}
            >
                2 - Selecione o tipo de ambiente *
            </label>
            <Select onValueChange={(value) => selectedRoomType(value)}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Tipo de Ambiente" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Sala">Sala</SelectItem>
                    <SelectItem value="Quarto">Quarto</SelectItem>
                    <SelectItem value="Cozinha">Cozinha</SelectItem>
                    <SelectItem value="Escritório">Escritório</SelectItem>
                    <SelectItem value="Banheiro">Banheiro</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default RoomType