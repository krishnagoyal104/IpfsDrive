# IpfsDrive
* Android App providing Decentralized Cloud Storage using IPFS
* Built using React Native and Redux

# For the uninitiated
IPFS or Interplanetary File System allows a decentralized way of storing and sharing files. 
It's a peer-to-peer protocol where files are stored on a number of distributed systems that are run and maintained by the community.

# Specs
Files uploaded are sent directly to Ipfs (public nodes maintained and provided by Infura) and the resulting hash is stored in a database.
We use firebase for storing and authenticating users.

## To run locally  
```
$ npm install  
$ npm run android  
$ npm start    
```

An alternative implemetation using Node.js and MongoDb https://github.com/krishnagoyal104/Ipfs-Server.

# Working on
* File-sharing and broadcast
* End-to-end encryption     







