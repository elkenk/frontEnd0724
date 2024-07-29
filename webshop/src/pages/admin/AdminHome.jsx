import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"
import { useTranslation } from 'react-i18next';

function AdminHome() {
  const { t } = useTranslation();

  // return <h1>{t('Welcome to React')}</h1>

  return (
    <div>
        <Button as={Link} to="/admin/maintain-categories"variant="primary">{t("admin.maintain-categories")}</Button>{' '}
      <Button as={Link} to="/admin/maintain-shops"variant="secondary">{t("admin.maintain-shops")}</Button>{' '}
      <Button as={Link} to="/admin/add-product" variant="success">{t("admin.add-product")}</Button>{' '}
      <Button as={Link} to="/admin/maintain-products"variant="warning">{t("admin.maintain-products")}</Button>{' '}

      
      <Button as={Link} to="/admin/supplier"variant="info">{t("admin.supplier")}</Button>{' '}
      <Button as={Link} to="/admin/book-supplier"variant="dark">{t("admin.book-supplier")}</Button>

    </div>
  )
}

export default AdminHome