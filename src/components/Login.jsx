import Input from "./Input";
import EntrancePage from "./EntrancePage";

export default function Login({name}){
  return(
    <EntrancePage name={name}>
      <Input
        name={'email'}
        placeholder={'E-mail'}
      />
      <Input
        name={'password'}
        placeholder={'Пароль'}
      />
    </EntrancePage>
  )
}