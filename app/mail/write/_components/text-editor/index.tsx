'use client'

import {Plate, PlateContent} from "@udecode/plate-common";
import {Editor} from "@/components/plate-ui/editor";

export default function TextEditor(){
    // TODO : initialValue를 사용해서 추후 서비스템플릿 fetch 해서 데이터 받아오기
    const initialValue = [
        {
            type: 'p',
            children: [
                {
                    text: ''
                }
            ]
        }
    ]

    return (
        <Plate initialValue={initialValue}>
            <Editor/>
        </Plate>
    )
}