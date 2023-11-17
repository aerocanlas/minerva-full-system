import styles from '@/styles/admin/content.module.scss'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC } from 'react'
import Head from 'next/head'
import {TbEdit, TbTrash, TbUsers } from 'react-icons/tb'
import router from 'next/router'

interface InputProp {
  labelTitle: string;
  defaultValue: string;
  updateFormValue: (value: string) => void;
}

const EditCustomerPage: FC<InputProp> = ({labelTitle, defaultValue, updateFormValue }) => {
  return (
    
    <div>
      <Head>
        <title>Customer Profile Settings</title>
      </Head>

      <div className={styles.titleHead}>
      <div className={styles.icon}><TbUsers size={50}/></div>
       Customer Profile Settings
      </div>

      <div className={styles.container}>
        <div className={styles.title}>Edit Details</div>
          <div className={styles.divider}></div>

          <div className={styles.formGroup}>
  <input type="input" className={styles.formField} placeholder="Input First Name" name="First Name" id='First Name' required />
  <label htmlFor="First Name" className={styles.formLabel}>First Name</label>
</div>
    </div>
          </div>





  )
}

(EditCustomerPage as PageWithLayout).layout = AdminPageLayout
export default EditCustomerPage