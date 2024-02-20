import Input from "./Input";
import EntrancePage from "./EntrancePage";

export default function Registration({name}){
  return(
    <EntrancePage name={name}>
      <Input
        name={'name'}
      />
      <Input
        name={'email'}
      />
      <Input
        name={'password'}
      />
    </EntrancePage>
  )
}