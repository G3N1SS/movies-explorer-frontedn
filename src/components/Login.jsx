import Input from "./Input";
import EntrancePage from "./EntrancePage";

export default function Login({name}){
  return(
    <EntrancePage name={name}>
      <Input
        name={'email'}
      />
      <Input
        name={'password'}
      />
    </EntrancePage>
  )
}