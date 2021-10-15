import React, { useState } from "react"; 
import {
    Box, Flex
} from "@chakra-ui/react";
import AceEditor from "react-ace"; 

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";


interface EditorProps {
    defaultCode: string
}

const Editor : React.FC<EditorProps> = ({
    defaultCode 
}) => {
    const [code, setCode] = useState(defaultCode);

    const onChange = (updatedValue : string) => {
        setCode(updatedValue);
    }

    return (
        <Flex
            flex="1"
        >
            <AceEditor 
                width="100%"
                height="100%"
                mode="python"
                theme="monokai"
                onChange={onChange}
                value={code}
                showPrintMargin={false}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true
                }}
            />
        </Flex>
    )
}

export default Editor;