import { Result , Button} from 'antd'
import React from 'react'
import { BsEmojiDizzy } from 'react-icons/bs';


function Warning() {
  return (
      <div>
          <Result
              status="warning"
              title="There are some problems with your operation."
              extra={
                  <Button type="primary" key="console">
                     <BsEmojiDizzy/>
                  </Button>
              }
          />
      </div>
  );
}

export default Warning