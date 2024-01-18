"use client";
import { Product } from "@prisma/client";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ManageClientProps {
  products: Product[];
}
const ManageClient: React.FC<ManageClientProps> = ({ products }) => {
  const router = useRouter();
  let rows: any = [];
  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        brand: product.brand,
        inStock: product.inStock,
      };
    });
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "category", headerName: "Category", width: 100 },
    { field: "brand", headerName: "Brand", width: 100 },
    {
      field: "inStock",
      headerName: "Stock",
      width: 100,
      renderCell: (params: any) => {
        return (
          <div>
            {params.row.inStock == true
              ? "Stokta mevcut"
              : "Stokta Mevcut Değil"}
          </div>
        );
      },
    },
    {
      field: "actions",
      headerName: "Action",
      width: 100,
      renderCell: (params: any) => {
        return (
          <button
            onClick={() => handleDelete(params.row.id)}
            className="mx-4 text-red-500 cursor-pointer"
          >
            Sil
          </button>
        );
      },
    },
  ];
  const handleDelete = useCallback(async (id: string) => {
    axios
      .delete(`/api/product/${id}`)
      .then(() => {
        router.refresh();
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default ManageClient;
