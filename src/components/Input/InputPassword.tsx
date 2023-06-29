import { Icon, Input } from '@rneui/themed'
import React, { useState } from 'react'

export default function InputPassword(props:any) {
    const [seePassword,setSeePassword] = useState<boolean>(false);
    return (
        <Input
            secureTextEntry={!seePassword}
            placeholder="Insira a sua senha"
            label="Senha"
            rightIcon={
                <Icon
                    name={seePassword?"md-eye-off":"md-eye"}
                    onPress={()=>{setSeePassword(!seePassword)}}
                    type='ionicon'
                    color={"white"}
                />
            }
            passwordRules={"A senha deve ser maior que 6 letras e menor que 16"}
            returnKeyType='done'
            autoCorrect={false}
            enablesReturnKeyAutomatically
            {...props}
        />
    )
}
