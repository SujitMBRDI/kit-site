---
id: solutions
title: Solutions on known things
description: 'Being and static site maker you should practies these things'
sidebar_position: 2
---

## mermaid file content

This is simple example where i can take any flow diagram which may be in mermaid or any other representation.
and can be shown in below. and on browser you can see result.

```mermaid
classDiagram
direction BT
class certificate {
   timestamp created_at
   timestamp updated_at
   uuid uuid
   varchar(255) area_of_application
   varchar(255) business_partner_number
   uuid document_id
   varchar(255) issuer
   varchar(255) registration_number
   varchar(255) remark
   varchar(255) trust_level
   varchar(255) uploader
   timestamp(6) with time zone valid_from
   timestamp(6) with time zone valid_until
   varchar(255) validator_bpn
   varchar(255) validator_name
   bigint document_file_id
   bigint certificate_type_id
   bigint id
}
class certificate_types {
   timestamp(6) with time zone created_at
   timestamp(6) with time zone updated_at
   uuid uuid
   varchar(255) certificate_type
   varchar(255) certificate_version
   bigint id
}
class document {
   text certificate_file
   varchar(255) certificate_format
   bigint id
}
class enclosed_sites {
   bigint certificate_id
   varchar(255) area_of_application
   varchar(255) site_bpn
}
class flyway_schema_history {
   varchar(50) version
   varchar(200) description
   varchar(20) type
   varchar(1000) script
   integer checksum
   varchar(100) installed_by
   timestamp installed_on
   integer execution_time
   boolean success
   integer installed_rank
}

certificate  -->  certificate_types : certificate_type_id
certificate  -->  document : document_file_id
certificate  -->  document : document_id
enclosed_sites  -->  certificate : certificate_id
```
