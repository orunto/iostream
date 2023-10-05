import  {  Config,  getFunctions,  getSchemaCreator  }  from  "nobox-client";

const NOBOX_TOKEN = process.env.NOBOX_TOKEN

export const config: Config = {
    endpoint:  "https://api.nobox.cloud",
    project:  "[iostream]",
    token: NOBOX_TOKEN as string,
};

export const createRowSchema = getSchemaCreator(config, { type: "rowed" });

export const createKeyGroupSchema = getSchemaCreator(config, { type: "key-group" });

export  const  Nobox  =  getFunctions(config);