import { Sort as DefaultTable} from "./fluenttable";
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';


export default async function Page() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data: countries } = await supabase.from('Country').select("id, Name")

    return(
        <>
            <div>Countries table</div>
            <DefaultTable />
            {JSON.stringify(countries, null, 2)}
            
        </>
    )
}