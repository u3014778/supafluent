"use client"
import { Sort as DefaultTable} from "./fluenttable"; 
import { NavDrawerSize as SideNav } from "../../components/fluentnav";

export default function Page() {
    return(
        <>
            <div>Countries table</div>
            <DefaultTable />
        </>
    )
}