import { AntDesign } from "@expo/vector-icons";
import { Image,View, TextInput, TouchableOpacity, Text, Alert, ImageBackground } from "react-native";
import { styles } from "./StylesCadastro"
import { ipserver } from "../config/servidor";

import { useState } from "react";

export default function Cadastro() {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [cpf, setCPF] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");



    return (
        
        <View style={styles.cadastro}>

        <Image style={styles.logoalyce} source={require("../screens/img/LogoAlyceV3.png")}></Image>



            <TextInput
                placeholder="Usuário"
                style={styles.caixa}
                value={usuario}
                onChangeText={(value) => setUsuario(value)}
            />


            <TextInput
                placeholder="Senha"
                style={styles.caixa}
                secureTextEntry
                value={senha}
                onChangeText={(value) => setSenha(value)}
            />
            <TextInput
                placeholder="Nome Completo"
                style={styles.caixa}
                value={nomeCompleto}
                onChangeText={(value) => setNomeCompleto(value)}
            />
            <TextInput
                placeholder="CPF"
                style={styles.caixa}
                keyboardType="number-pad"
                value={cpf}
                onChangeText={(value) => setCPF(value)}
            />
            <TextInput
                placeholder="Email"
                style={styles.caixa}
                keyboardType="email-address"
                value={email}
                onChangeText={(value) => setEmail(value)} />
            

            <TextInput
                placeholder="Endereço"
                style={styles.caixa}
                value={endereco}
                onChangeText={(value) => setEndereco(value)} />
            

            <TouchableOpacity onPress={() =>{
                efetuarCadastro(usuario,senha,nomeCompleto,cpf,email,endereco)
                return Alert.alert("Aviso","Você cadastrou com sucesso");
            }}>
                <Image style={styles.btn2} source={require("../screens/img/btnCadastrar.png")}></Image>
            </TouchableOpacity>
        </View>


            
       
    )
}


function efetuarCadastro(usuario:any,senha:any,nome:any, cpf:any, email:any,endereco:any){
    
    if(usuario=="" ||
    senha=="" || 
    nome == "" || 
    cpf =="" ||
    email == "" ||
    endereco=="") {
        return Alert.alert("Você deve preencher todos os campos");
    }
    fetch(`${ipserver}/usuarios/cadastro`,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomeusuario:usuario,
            senha:senha,
            nomecompleto:nome,
            cpf:cpf,
            email:email,
            endereco:endereco
        })
    })
    .then((response)=>response.json())
    .then((rs)=>console.log(rs))
    .catch((erro)=>console.error(`Erro ao tentar acessar a api -> ${erro}`))
  
}