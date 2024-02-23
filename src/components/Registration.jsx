import Input from "./Input";
import EntrancePage from "./EntrancePage";

export default function Registration({name}){
  return(
    <EntrancePage name={name}>
      <Input
        name={'name'}
        placeholder={'Введите ваше имя'}
      />
      <Input
        name={'email'}
        placeholder={'E-Mail'}
      />
      <Input
        name={'password'}
        placeholder={'Пароль'}
      />
    </EntrancePage>
  )
}