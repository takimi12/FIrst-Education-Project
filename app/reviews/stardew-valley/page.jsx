import {readFile} from 'node:fs/promises';
import { marked } from 'marked';
import Heading from '../../../components/heading';



export default async function StardewValleyPage(){

    const text = await readFile('./content/reviews/stardew-valley.md', 'utf-8');
   const html = marked(text, {headerIds: false, mangle:false});
   
    return(
        <>
        <Heading>Stardew</Heading>
        <img src="/images/stardew-valley.jpg" alt="Hollow Knight" 
       width="640" height="360"
       className="mb-2 rounded"
        />
    <article dangerouslySetInnerHTML={{__html: html}} className="max-w-screen-sm prose prose-state" />
    </>
    );
}