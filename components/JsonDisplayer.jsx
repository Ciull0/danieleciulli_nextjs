export default function JsonDisplayer({ data }) {
    if (typeof data == 'object' && data != null) {
        if(data.constructor == Array){
            return(
                <div className="array">
                    {
                        data.map((elem, index)=>{
                            return(
                                <div className="array__elem" key={index}>
                                    <JsonDisplayer data={elem}></JsonDisplayer>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }else{
            return(
                <div className="obj">
                    {
                        Object.keys(data).map((key, index)=>{
                            return(
                                <div  key={index} className="obj__elem">
                                    <div className="obj__key">
                                        {key}
                                    </div>
                                    <JsonDisplayer data={data[key]}></JsonDisplayer>
                                </div>
                            )
                        })
                    }
                </div>
            );   
        }        
    } else if(data != null) {
        return(
            <div className="string">
                {data}
            </div>
        )
    }else{
        return('')
    }
  }
  