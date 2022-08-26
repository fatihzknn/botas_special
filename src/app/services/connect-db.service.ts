import { Clothes } from './../models/clothes';

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
  getUserInformation3!:Clothes



  constructor(private http:HttpClient) { }

  getToken() { // ************
    return "16683548486735743213"
    //return localStorage.getItem('token')
  }

  

  // insertEmployee(data: Employee) {
  //   const body = {
  //     Token: this.getToken(),
  //     DataStoreId: '51487131248722587836',
  //     Operation: 'insert',
  //     Encrypted: 1951,
  //     Data: `insert into "postgres".public.botas_cik3  (sicil_no)
  //     Select ${data.sicil_no} Where not exists(select * from "postgres".public.botas_cik3  where sicil_no =${data.sicil_no}) 
  //     Update \"postgres\".public.botas_cik3 Set sicil_no=${data.sicil_no},ad_soyad='${data.ad_soyad}',unite='${data.unite}',alt_birim='${data.alt_birim}',unvan='${data.unvan}',beden='${data.beden}',ayak_no='${data.ayak_no}',kan_grubu='${data.kan_grubu}',cinsiyet='${data.cinsiyet}',ilk_yardim='${data.ilk_yardim}',aktif_pasif='AKTİF'
  //         WHERE sicil_no = ${data.sicil_no}`,
  //   };
  //   return this.http.post(baseUrl + 'Applications/DataOps', body);
  // }

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
  // insert into botas_cpb  (sicil)
  // Select 735 Where not exists(select * from botas_cpb  where sicil=735)
  // // INSERT INTO targetTable(field1) 
  // SELECT field1
  // FROM myTable
  // WHERE NOT(field1 IN (SELECT field1 FROM targetTable))

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

  getSicilNo(){
    const body = {
      Token: this.getToken(),
      DataStoreId: '51487131248722587836',
      Operation: 'read',
      Encrypted: 1951,
      Data: 'select sicil_no from "postgres".public.botas_cik3 ',
    };
    return this.http.post(baseUrl + 'Applications/DataOps', body).pipe(
      map((response:any) => {
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
            Data: `Insert into "postgres".public.botas_cpb(sicil_no,ad_soyad,kurum,unite,birim,unvan,beden,ayak_no,kan_grubu,cinsiyet,ilk_yardim,kkd_dagitim_dayanagi,donem,kkd_ozellik,kkd_malzeme_cinsi,yil,verildigi_tarih,kkd_kullanim_suresi,sonraki_yil,alacak_bilgisi,aldi_bilgisi,durum_belirlenen_sure_icinde_mi_sure_asildi_mi,dagitim_planlandi_mi_aktif_verildi) values('${data.sicil_no}','${data.ad_soyad}','${data.kurum}','${data.unite}','${data.birim}','${data.unvan}',${data.beden},${data.ayak_no},'${data.kan_grubu}','${data.cinsiyet}','${data.ilk_yardim}', '${data.kkd_dagitim_dayanagi}','${data.donem}','${data.kkd_ozellik}','${data.kkd_malzeme_cinsi}','${data.yil}','${data.verildigi_tarih}','${data.kkd_kullanim_suresi}','${data.sonraki_yil}','${data.alacak_bilgisi}','${data.aldi_bilgisi}','${data.durum_belirlenen_sure_icinde_mi_sure_asildi_mi}','${data.dagitim_planlandi_mi_aktif_verildi}')`,
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

        getClothesCount(){
          const body = {
            Token: this.getToken(),
            DataStoreId: '54524581455213527462',
            Operation: 'read',
            Encrypted: 1951,
            Data: `select COUNT(kiyafet_id) from \"postgres\".public.botas_cpb where sicil_no=${this.getUserInformation2}`,
          };
          return this.http.post(baseUrl + 'Applications/DataOps', body).pipe(
            map((response: any) => {
              return response.message;
            })
          );
        // select COUNT(kiyafet_id) from botas_cpb where botas_cpb.sicil=734
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
                  `Update \"postgres\".public.botas_cpb Set sicil_no=${data.sicil_no},ad_soyad='${data.ad_soyad}',unite='${data.unite}',unvan='${data.unvan}',beden='${data.beden}',ayak_no='${data.ayak_no}',kan_grubu='${data.kan_grubu}',cinsiyet='${data.cinsiyet}',ilk_yardim='${data.ilk_yardim}',kkd_dagitim_dayanagi='${data.kkd_dagitim_dayanagi}',donem='${data.donem}',kkd_ozellik='${data.kkd_ozellik}',kkd_malzeme_cinsi='${data.kkd_malzeme_cinsi}',yil='${data.yil}',verildigi_tarih='${data.verildigi_tarih}',kkd_kullanim_suresi='${data.kkd_kullanim_suresi}',sonraki_yil='${data.sonraki_yil}',alacak_bilgisi='${data.alacak_bilgisi}',aldi_bilgisi='${data.aldi_bilgisi}',durum_belirlenen_sure_icinde_mi_sure_asildi_mi='${data.durum_belirlenen_sure_icinde_mi_sure_asildi_mi}',dagitim_planlandi_mi_aktif_verildi='${data.dagitim_planlandi_mi_aktif_verildi}'
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
            
            getAktifClothes() {
              const body = {
                Token: this.getToken(),
                DataStoreId: '54524581455213527462',
                Operation: 'read',
                Encrypted: 1951,
                Data: `select * from \"postgres\".public.botas_cpb where dagitim_planlandi_mi_aktif_verildi = 'AKTİF' and sicil_no=${this.getUserInformation2} `
              };
              return this.http.post(baseUrl + 'Applications/DataOps', body).pipe(
                map((response: any) => {
                  return response.message;
                })
              );
            }
            getAktifSameClothes() {
              const body = {
                Token: this.getToken(),
                DataStoreId: '54524581455213527462',
                Operation: 'read',
                Encrypted: 1951,
                Data: `select * from \"postgres\".public.botas_cpb where dagitim_planlandi_mi_aktif_verildi = 'AKTİF' and sicil_no=${this.getUserInformation2} `
              };
              return this.http.post(baseUrl + 'Applications/DataOps', body).pipe(
                map((response: any) => {
                  return response.message;
                })
              );
            }
            getPasifClothes() {
              const body = {
                Token: this.getToken(),
                DataStoreId: '54524581455213527462',
                Operation: 'read',
                Encrypted: 1951,
                Data: `select * from \"postgres\".public.botas_cpb where dagitim_planlandi_mi_aktif_verildi = 'VERİLDİ' and sicil_no=${this.getUserInformation2} `
              };
              return this.http.post(baseUrl + 'Applications/DataOps', body).pipe(
                map((response: any) => {
                  return response.message;
                })
              );
            }
            getClothesForTable() {
              const body = {
                Token: this.getToken(),
                DataStoreId: '58511731646476236775',
                Operation: 'read',
                Encrypted: 1951,
                Data: `select * from \"postgres\".public.botas_kiyafetler2`
              };
              return this.http.post(baseUrl + 'Applications/DataOps', body).pipe(
                map((response: any) => {
                  return response.message;
                })
              );
            }
            updateClothesForTable(data:Clothes){
              console.log(this.getUserInformation3.kiyafet_no)
              const body = {
                Token: this.getToken(),
                DataStoreId: '58511731646476236775',
                Operation: 'update',
                Encrypted: 1951,
                Data:
                  `Update \"postgres\".public.botas_kiyafetler2 Set kiyafet_adi='${data.kiyafet_adi}',kullanim_suresi='${data.kullanim_suresi}',kiyafet_turu='${data.kiyafet_turu}'
                  WHERE kiyafet_no = ${this.getUserInformation3.kiyafet_no}`
              };
              return this.http.post(baseUrl + 'Applications/DataOps', body);
            }
            insertClotheForTable(data: Clothes){
              const body = {
                Token: this.getToken(),
                DataStoreId: '58511731646476236775',
                Operation: 'insert',
                Encrypted: 1951,
                Data: `Insert into "postgres".public.botas_kiyafetler2(kiyafet_adi,kullanim_suresi,kiyafet_turu) values('${data.kiyafet_adi}','${data.kullanim_suresi}','${data.kiyafet_turu}')`,
              };
              return this.http.post(baseUrl + 'Applications/DataOps', body);
            
            }
            deleteClothesForTable(kiyafet_no:any){
              const body = {
                Token: this.getToken(),
                DataStoreId: '58511731646476236775',
                Operation: 'delete',
                Encrypted: 1951,
                Data: `delete from \"postgres\".public.botas_kiyafetler2 where kiyafet_no ='${kiyafet_no}'`
              };
              return this.http.post(baseUrl + 'Applications/DataOps', body)
            }

            getFeatures() {
              const body = {
                Token: this.getToken(),
                DataStoreId: '77873244628478578536',
                Operation: 'read',
                Encrypted: 1951,
                Data: `select * from \"postgres\".public.botas_kiyafet_ozellik`
              };
              return this.http.post(baseUrl + 'Applications/DataOps', body).pipe(
                map((response: any) => {
                  return response.message;
                })
              );
            }
    }



