import React ,{ useState} from 'react'
import {
  useParams,
} from "react-router-dom";
function SubFranchise() {
  let { fid } = useParams();
console.log(fid);
const [Details, setDetails] = useState([
  {},
  {},
  {}
])
  return (
    <div>SubFranchise { fid }</div>

  )
}

export default SubFranchise