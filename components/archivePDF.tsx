import React, { useState, useEffect } from 'react'
import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from '@react-pdf/renderer';
import { FormattedDate, FormattedPrice, dateFunctions} from '@/helpers/index'
import { format } from 'date-fns'

Font.register({
  family: 'Franklin Gothic Book',
  src: '/assets/FRABK.ttf',
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
  }
})



const ArchivePDF = ({ generate }: any) => {

  const [ generated, setGenerated ]= useState(null)


    useEffect(() => {

        const fetchData = async () => {
          const res = await fetch(`http://localhost:3001/order/getGeneratedReport?startDate=${generate.startDate.slice(0, 10)}&endDate=${generate.endDate.slice(0, 10)}`, {
            method: "GET",
            cache: "default",
            headers: { 'Content-Type': 'application/json' },
          })
    
          if(!res.ok) throw new Error("There's something wrong while fetching")
    
    
          const result = await res.json();
    
          setGenerated(result)
        }
    
        fetchData()
      }, [])

  return(
    
    <Document>
    <Page style={styles.body}>
      <View style={{ position: 'absolute', top: '20px', left: '270px', width: '50px', paddingBottom: '20px'}}>
        <Image src="/logo.png"/>
      </View>
      <View style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Franklin Gothic Book', fontSize: '11px'}}>
      <Text
        wrap={false}
        style={{
        position: 'absolute',
        top: '35px',
        left: '230px',
        display: 'flex',
        justifyContent: 'center',
      }}
      >               
      Minerva Sales Corporation
       </Text> 
</View>

<View style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Franklin Gothic Book', fontSize: '11px'}}>
      <Text
        wrap={false}
        style={{
        position: 'absolute',
        top: '47px',
        left: '194px',
        display: 'flex',
        justifyContent: 'center',
      }}
      >               
      General Malvar Street, Barangay Tubigan,
       </Text> 
</View>

<View style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Franklin Gothic Book', fontSize: '11px'}}>
      <Text
        wrap={false}
        style={{
        position: 'absolute',
        top: '58px',
        left: '232px',
        display: 'flex',
        justifyContent: 'center',
      }}
      >               
      Binan City, Laguna, 4024
       </Text> 
</View>

<View style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Franklin Gothic Book', fontSize: '11px',}}>
      <Text
        wrap={false}
        style={{
        position: 'absolute',
        top: '83px',
        left: '235px',
        display: 'flex',
        justifyContent: 'center',
      }}
      >               
      Generated Sales Report
       </Text> 
</View>


<View style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Franklin Gothic Book', fontSize: '11px',}}>
      <Text
        wrap={false}
        style={{
        position: 'absolute',
        top: '124px',
        left: '35px',
        display: 'flex',
        justifyContent: 'center',
      }}
      >               
      Archive ID: 
       </Text> 
</View>


  <View style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Franklin Gothic Book', fontSize: '11px' }}>

    {/* Row 1 */}
    <Text style={{ position: 'absolute', top: '143', left: '35px', padding: '5px' }}>Order ID</Text>
    <Text style={{ position: 'absolute', top: '143', left: '135px', padding: '5px' }}>Ordered By</Text>
    <Text style={{ position: 'absolute', top: '143', left: '300px', padding: '5px' }}>Ordered By</Text>
    <Text style={{ position: 'absolute', top: '143', left: '400px', padding: '5px' }}>Date Ordered</Text>
    <Text style={{ position: 'absolute', top: '143', left: '475px', padding: '5px' }}>Total</Text>
    
    {generated?.map(({ orderID, archieveID, id, orders, Orders, startDate, endDate, Product, User, payment, quantity, status, createdAt, total }: any, index: number) => (

    <Text key={orderID} style={{ position: 'absolute', top: `${163 + index * 20}px`, left: '35px', padding: '5px' }} >
      <Text style={{ position: 'absolute', top: `${163 + index * 20}px`, left: '35px', padding: '5px' }}>{orders}</Text>
    </Text>
    ))}
    
    {generated?.map(({ archieveID, Orders, startDate, endDate,   Product, User, payment, quantity, status, createdAt, total }: any, index: number) => (
      
      <Text key={archieveID} style={{ position: 'absolute', top: `${163 + index * 20}px`, left: '135px', padding: '5px', marginRight: '10px' }} >
    {Product?.map(({ name}: any) => (
    <Text style={{ position: 'absolute', top: `${163 + index * 20}px`, left: '135px', padding: '5px', marginRight: '10px'}}>{name}</Text>
    ))}
    </Text>
    
    ))}

    {generated?.map(({ archieveID, Orders, startDate, endDate,  Product, User, payment, quantity, status, createdAt, total }: any, index: number) => (
        <Text key={archieveID} style={{ position: 'absolute', top: `${163 + index * 20}px`, left: '300px', padding: '5px', marginRight: '10px' }} >
        <Text style={{ position: 'absolute', top: '163px', left: '300px', padding: '5px' }}>{User[0].profile.firstname} {User[0].profile.lastname}</Text>
        </Text>
        ))}

        {generated?.map(({ archieveID, Orders, startDate, endDate, Product, User, payment, quantity, status, createdAt, total }: any, index: number) => (
        <Text key={archieveID} style={{ position: 'absolute', top: `${163 + index * 20}px`, left: '400px', padding: '5px', marginRight: '10px' }} >
   
        <Text style={{ position: 'absolute', top: '163px', left: '400px', padding: '5px' }}>{FormattedDate(createdAt)}</Text>
        </Text>
        ))}

{generated?.map(({ archieveID, Orders, startDate, endDate, Product, User, payment, quantity, status, createdAt, total }: any, index: number) => (
        <Text key={archieveID} style={{ position: 'absolute', top: `${163 + index * 20}px`, left: '475px', padding: '5px', marginRight: '10px' }} >
        <Text style={{ position: 'absolute', top: '163px', left: '475px', padding: '5px' }}>{FormattedPrice(total)}</Text>
        </Text>
        ))} 

<Text style={{ position: 'absolute', top: '783px', left: '35px', padding: '5px' }}>
{FormattedPrice(generated?.reduce((a: any, b: any) => ( a + b.total), 0))}</Text>
  </View>

</Page>
</Document>
       

  )

}

const PDFView = ({ generate }: any) => {
  const [client, setClient] = useState(false)

  useEffect(() => {

    setClient(true)

  }, [])

  return(
  client ?  
  <PDFViewer style={{width: '100%', height: '850px'}}>
    <ArchivePDF  generate={generate} />
  </PDFViewer>: null
  )

}

export default PDFView




  