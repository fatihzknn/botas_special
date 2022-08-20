
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../utils/baseUrl';
import { map } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ConnectDbService {

  getUserInformation!:Employee;
  getUserInformation2!:Product



  constructor(private http:HttpClient) { }

  getToken() { // ************
    return "71882582453655477245"
    //return localStorage.getItem('token')
  }

  

  insertEmployee(data: Employee) {
    const body = {
      Token: this.getToken(),
      DataStoreId: '51487131248722587836',
      Operation: 'insert',
      Encrypted: 1951,
      Data: `Insert into "postgres".public.botas_cik3(sicil_no,ad_soyad,unite,alt_birim,unvan,beden,ayak_no,kan_grubu,cinsiyet,ilk_yardim,aktif_pasif) values(${data.sicil_no}, '${data.ad_soyad}', '${data.unite}','${data.alt_birim}','${data.unvan}',${data.beden},${data.ayak_no},'${data.kan_grubu}','${data.cinsiyet}','${data.ilk_yardim}','Aktif')`,
    };
    return this.http.post(baseUrl + 'Applications/DataOps', body);
  }



  getEmployees() {
    const body = {
      Token: this.getToken(),
      DataStoreId: '51487131248722587836',
      Operation: 'read',
      Encrypted: 1951,
      Data: 'select * from "postgres".public.botas_cik3 ',
    };
    return this.http.post(baseUrl + 'Applications/DataOps', body).pipe(
      map((response: any) => {
        return response.message;
      })
    );
  }

  deleteEmployee(sicil_no: any) {
      const body = {
        Token: this.getToken(),
        DataStoreId: '51487131248722587836',
        Operation: 'delete',
        Encrypted: 1951,
        Data: `delete from \"postgres\".public.botas_cik3 where sicil_no=${sicil_no}`
      };
      return this.http.post(baseUrl + 'Applications/DataOps', body)
        
    } 
  
    updateEmployee(data:Employee){
      console.log(this.getUserInformation.sicil_no)
      const body = {
        Token: this.getToken(),
        DataStoreId: '51487131248722587836',
        Operation: 'update',
        Encrypted: 1951,
        Data:
          `Update \"postgres\".public.botas_cik3 Set sicil_no=${data.sicil_no},ad_soyad='${data.ad_soyad}',unite='${data.unite}',alt_birim='${data.alt_birim}',unvan='${data.unvan}',beden='${data.beden}',ayak_no='${data.ayak_no}',kan_grubu='${data.kan_grubu}',cinsiyet='${data.cinsiyet}',ilk_yardim='${data.ilk_yardim}',aktif_pasif='${data.aktif_pasif}'
          WHERE sicil_no = ${this.getUserInformation.sicil_no}`
      };
      return this.http.post(baseUrl + 'Applications/DataOps', body);
    }

    aktifToPasif(sicil_no: any){
      const body = {
        Token: this.getToken(),
        DataStoreId: '51487131248722587836',
        Operation: 'update',
        Encrypted: 1951,
        Data:
        `Update \"postgres\".public.botas_cik3 Set aktif_pasif='Pasif'
        WHERE sicil_no = ${sicil_no}`
    };
    return this.http.post(baseUrl + 'Applications/DataOps', body);
      };
      pasiftoAktif(sicil_no: any){
        const body = {
          Token: this.getToken(),
          DataStoreId: '51487131248722587836',
          Operation: 'update',
          Encrypted: 1951,
          Data:
          `Update \"postgres\".public.botas_cik3 Set aktif_pasif='Aktif'
          WHERE sicil_no = ${sicil_no}`
      };

      
      return this.http.post(baseUrl + 'Applications/DataOps', body);
        };
        getAktifEmployees() {
          const body = {
            Token: this.getToken(),
            DataStoreId: '51487131248722587836',
            Operation: 'read',
            Encrypted: 1951,
            Data: `select * from \"postgres\".public.botas_cik3 where aktif_pasif='Aktif'`
          };
          return this.http.post(baseUrl + 'Applications/DataOps', body).pipe(
            map((response: any) => {
              return response.message;
            })
          );
        }
     
        insertClothes(data: Product) {
          const body = {
            Token: this.getToken(),
            DataStoreId: '54524581455213527462',
            Operation: 'insert',
            Encrypted: 1951,
            Data: `Insert into "postgres".public.botas_cpb(sicil_no,ad_soyad,kurum,unite,birim,unvan,beden,ayak_no,kan_grubu,cinsiyet,ilk_yardimci_sertifikasi_var_mi,kkd_dagitim_dayanagi,donem,kkd_ozellik,kkd_malzeme_cinsi,yil,verildigi_tarih,kkd_kullanim_suresi,sonraki_yil,alacak_bilgisi,aldi_bilgisi,durum_belirlenen_sure_icinde_mi_sure_asildi_mi,dagitim_planlandi_mi_aktif_verildi) values('${data.sicil_no}','${data.ad_soyad}','${data.kurum}','${data.unite}','${data.birim}','${data.unvan}',${data.beden},${data.ayak_no},'${data.kan_grubu}','${data.cinsiyet}','${data.ilk_yardimci_sertifikasi_var_mi}', '${data.kkd_dagitim_dayanagi}','${data.donem}','${data.kkd_ozellik}','${data.kkd_malzeme_cinsi}','${data.yil}','${data.verildigi_tarih}','${data.kkd_kullanim_suresi}','${data.sonraki_yil}','${data.alacak_bilgisi}','${data.aldi_bilgisi}','${data.durum_belirlenen_sure_icinde_mi_sure_asildi_mi}','${data.dagitim_planlandi_mi_aktif_verildi}')`,
          };
          return this.http.post(baseUrl + 'Applications/DataOps', body);
        }
        
        getSpecialClothes() {
          const body = {
            Token: this.getToken(),
            DataStoreId: '51487131248722587836',
            Operation: 'read',
            Encrypted: 1951,
            Data: `select sicil_no,ad_soyad,unite,unvan,beden,ayak_no,kan_grubu,cinsiyet,ilk_yardim from \"postgres\".public.botas_cik3 where sicil_no=${this.getUserInformation2}`,
          };
          return this.http.post(baseUrl + 'Applications/DataOps', body).pipe(
            map((response: any) => {
              return response.message;
            })
          );
        }
        
        getClothes() {
          const body = {
            Token: this.getToken(),
            DataStoreId: '54524581455213527462',
            Operation: 'read',
            Encrypted: 1951,
            Data: `select sicil_no,kkd_dagitim_dayanagi,donem,kkd_ozellik,kkd_malzeme_cinsi,yil,verildigi_tarih,kkd_kullanim_suresi,sonraki_yil,alacak_bilgisi,aldi_bilgisi,durum_belirlenen_sure_icinde_mi_sure_asildi_mi,dagitim_planlandi_mi_aktif_verildi,kiyafet_id from \"postgres\".public.botas_cpb where sicil_no=${this.getUserInformation2}`,
          };
          return this.http.post(baseUrl + 'Applications/DataOps', body).pipe(
            map((response: any) => {
              return response.message;
            })
          );
        }
        deleteClothes(kiyafet_id: any) {
          const body = {
            Token: this.getToken(),
            DataStoreId: '54524581455213527462',
            Operation: 'delete',
            Encrypted: 1951,
            Data: `delete from \"postgres\".public.botas_cpb where kiyafet_id='${kiyafet_id}'`
          };
          return this.http.post(baseUrl + 'Applications/DataOps', body)
         }
         
         updateClothes(data: Product) {
          console.log(this.getUserInformation2.sicil_no)
              const body = {
                Token: this.getToken(),
                DataStoreId: '54524581455213527462',
                Operation: 'update',
                Encrypted: 1951,
                Data:
                  `Update \"postgres\".public.botas_cpb Set sicil_no=${data.sicil_no},ad_soyad='${data.ad_soyad}',unite='${data.unite}',unvan='${data.unvan}',beden='${data.beden}',ayak_no='${data.ayak_no}',kan_grubu='${data.kan_grubu}',cinsiyet='${data.cinsiyet}',ilk_yardimci_sertifikasi_var_mi='${data.ilk_yardimci_sertifikasi_var_mi}',kkd_dagitim_dayanagi='${data.kkd_dagitim_dayanagi}',donem='${data.donem}',kkd_ozellik='${data.kkd_ozellik}',kkd_malzeme_cinsi='${data.kkd_malzeme_cinsi}',yil='${data.yil}',verildigi_tarih='${data.verildigi_tarih}',kkd_kullanim_suresi='${data.kkd_kullanim_suresi}',sonraki_yil='${data.sonraki_yil}',alacak_bilgisi='${data.alacak_bilgisi}',aldi_bilgisi='${data.aldi_bilgisi}',durum_belirlenen_sure_icinde_mi_sure_asildi_mi='${data.durum_belirlenen_sure_icinde_mi_sure_asildi_mi}',dagitim_planlandi_mi_aktif_verildi='${data.dagitim_planlandi_mi_aktif_verildi}'
                  WHERE kiyafet_id = ${this.getUserInformation2.kiyafet_id}`
              };
              return this.http.post(baseUrl + 'Applications/DataOps', body);
            }
            getData(sicil_no:any) {
              const body = {
                Token: this.getToken(),
                DataStoreId: '54524581455213527462',
                Operation: 'read',
                Encrypted: 1951,
                Data: `select ad_soyad from "postgres".public.botas_cik WHERE sicil_no=${sicil_no}`
              };
              return this.http.post(baseUrl + 'Applications/DataOps', body).pipe(
                map((response: any) => {
                  return response.message;
                })
              );
            }
            
            

    }



