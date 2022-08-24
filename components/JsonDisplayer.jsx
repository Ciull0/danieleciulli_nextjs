import { useState } from "react";

export default function JsonDisplayer(props) {
    
    let keyPath = props.keypath ? props.keypath : [];

    const [rootData = props.rootData ? props.rootData : props.data, updateRootData] = useState();

    if(!props.rootData){
        console.log('at root rerender', rootData);
    }

    function updateDataOnRoot(event, keyPath){
        let newRootData = recursiveObjectUpdater(event.target.value, rootData, keyPath)
        updateRootData(newRootData);

        props.onUpdateRootData(rootData);
    }

    function recursiveObjectUpdater(newValue, object, keyPath=[]){

        if(keyPath.length == 1){
            object[keyPath[0]] = newValue;

            return object;
        }
        else{
            let toEditkey = keyPath[0];
            object[toEditkey] = recursiveObjectUpdater(newValue, object[toEditkey], keyPath.slice(1));
            return(object);
        }
    }

    
    if (typeof props.data == 'object' && props.data != null) {

        if(props.data.constructor == Array){
            return(
                <div className="array">
                    {
                        props.data.map((elem, index)=>{
                            return(
                                <div className="array__elem" key={index}>
                                    <JsonDisplayer onUpdateRootData={(newRootData)=>{updateRootData(newRootData)}} data={elem} rootData={rootData} isEditEnabled={true} keypath={keyPath.concat(index)} ></JsonDisplayer>
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
                        Object.keys(props.data).map((key, index)=>{
                            return(
                                <div  key={index} className="obj__elem">
                                    <div className="obj__key">
                                        {key}
                                    </div>
                                    <JsonDisplayer onUpdateRootData={(newRootData)=>{updateRootData(newRootData)}} data={props.data[key]} rootData={rootData} isEditEnabled={true} keypath={keyPath.concat(key)}></JsonDisplayer>
                                </div>
                            )
                        })
                    }
                </div>
            );   
        }        
    } else if(props.data != null) {
        if(props.isEditEnabled){
            return(
                <input onChange={(e)=>{updateDataOnRoot(e, keyPath)}} type={'text'} value={props.data} placeholder={props.data}/>
            )
        }else{
            <span className="value">{data}</span>
        }
    }else{
        return('')
    }
}
  