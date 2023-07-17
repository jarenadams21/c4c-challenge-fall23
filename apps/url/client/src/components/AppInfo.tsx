import { AlertDescription, Alert, AlertIcon, CloseButton } from "@chakra-ui/react"
import { useState } from 'react';

export const AppInfo = () => {
    const [info, showInfo] = useState('50%');

    return (
        <Alert width={info} status='info'  alignItems='center'>
        <AlertIcon alignSelf='center' onClick={ () => showInfo('50%')} />
        { info === '50%' && ( <>
        <AlertDescription>
        Small URLs only work when the server for this application is running!
        </AlertDescription>
        <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={ () => showInfo('5%')}
          />
          </>
        )
        }
      </Alert>
    )
}