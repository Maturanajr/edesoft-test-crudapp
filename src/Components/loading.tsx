import React from 'react'
import { usePromiseTracker } from "react-promise-tracker";
import {ThreeDots} from 'react-loader-spinner';

export default function Loading() {
    const { promiseInProgress } = usePromiseTracker();
  return (
    <div>
      {promiseInProgress && 
        <div
            style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
        <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#4fa94d" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
            />
        </div>
      }      
    </div>
  )
}
