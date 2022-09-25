import createEncryptor from 'redux-persist-transform-encrypt';

const encryptor = createEncryptor({secretKey: 'my-super-secret-key-crewpizza'});

export default encryptor;

