import * as Button from 'Button';
export default function ComponentButton(){
    return(
        <div className="container mx-auto px-4 mt-4">
          <Button.primary className="mr-2">
            Primary
          </Button.primary>
          <Button.danger className="mr-2">
            Danger
          </Button.danger>
          <Button.success>
            Success
          </Button.success>
        </div>
    )
}