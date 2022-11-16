import { GridValueGetterParams } from '@mui/x-data-grid';

export const userColumns = [

  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'almacen', headerName: 'Almacen', width: 100 },
  { field: 'precio_unitario', headerName: 'P. Unitario', width: 100 },
  { field: 'precio_total', headerName: 'P. Total', width: 90 },
  { field: 'fecha_de_entrega', headerName: 'Fecha de entrega', width: 120 },
  /*{
    field: 'item',
    headerName: 'Item del Bien',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    valueGetter: (params) =>
      `${params.row.binene.item || ''}`,
  },*/
  {
    field: 'Decripcion del bien',
    headerName: 'Decripcion del bien',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 360,
    valueGetter: (params) =>
      `${params.row.binene.description || ''}}`,
  },
  {
    field: 'id_usuarios',
    headerName: 'Administrativo',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `${params.row.usuario.nombres || ''} 
      ${params.row.usuario.apellido_paterno || '' }
       ${params.row.usuario.apellido_materno || ''}`,
  },
  {
    field: 'Sede',
    headerName: 'Sede',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 260,
    valueGetter: (params) =>
      `${params.row.sede.sede || ''}}`,
  },

  
  /*{
    //field: 'binene',
    headerName: 'Full name',  
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
    
      `${params.binene || ''}`,
      
  },*/
  /*{
    valueGetter: (param) =>
      `${param.precio_unitario}`,

    field: 'precio_unitario',
    headerName: 'Almacen',
    width: 150
  },*/
];