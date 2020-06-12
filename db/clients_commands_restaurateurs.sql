CREATE TABLE "clients" (
	"id" serial,
	"tel" char(20) NOT NULL,
	"nom" text NOT NULL,
	"adresse" text NOT NULL
);

CREATE TABLE "commandes" (
	"id" serial,
	"id_client" integer,
	"prix" integer
);


CREATE TABLE "restaurateurs" (
 "id" serial,
 "login" text,
 "pass" text
);
