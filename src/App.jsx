import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
      return (
           <div>
                <Image />
                <Input type="text" />
                <Input type="email" />
                <Input type="text" />
                <Button text={'Generate My Ticket'} />
            </div>
      );
};