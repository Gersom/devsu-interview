import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, TextInput } from 'react-native';
import axios from "axios";

const ItemAdd = ({ onClose }) => {
  const [inputID, setInputID] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputLogo, setInputLogo] = useState('');
  const [inputRelease, setInputRelease] = useState('');
  const [inputRevision, setInputRevision] = useState('');

  const [valID, setValID] = useState(null);
  const [valName, setValName] = useState(null);
  const [valDescription, setValDescription] = useState(null);
  const [valLogo, setValLogo] = useState(null);
  const [valRelease, setValRelease] = useState(null);
  const [valRevision, setValRevision] = useState(null);

  const validationID = (textData) => {
    setInputID(textData)
    setValID(textData.length === 0 ? null : (textData.length >= 3 && textData.length <= 10))
  }

  const validationName = (textData) => {
    setInputName(textData)
    setValName(textData.length === 0 ? null : textData.length >= 5 && textData.length <= 100);
  }

  const validationDescription = (textData) => {
    setInputDescription(textData)
    setValDescription(textData.length === 0 ? null : textData.length >= 10 && textData.length <= 200);
  }

  const validationRelease = (textData) => {
    setInputRelease(textData)
    // Aquí deberías implementar la lógica para validar la fecha
    // Puedes usar bibliotecas como moment.js o la API de Date de JavaScript
    // para parsear y comparar las fechas.
    // Por ejemplo:
    const releaseDate = new Date(textData);
    const currentDate = new Date();
    setValRelease(textData.length === 0 ? null : releaseDate >= currentDate);
  }

  const validationRevision = (textData) => {
    setInputRevision(textData);
    // Aquí deberías implementar la lógica para validar la fecha de revisión
    // Debe ser un año posterior a la fecha de liberación.
    // Por ejemplo:
    const releaseDate = new Date(inputRelease);
    const revisionDate = new Date(textData);
    const nextYear = new Date(releaseDate.getFullYear() + 1, releaseDate.getMonth(), releaseDate.getDate());
    // setValRevision(textData.length === 0 ? null : revisionDate.getTime() === nextYear.getTime());
    setValRevision(textData.length === 0 ? null : true);
  }

  const postItems = async () => {
    if(inputID !== '' || inputName  !== '' || inputDescription  !== '' || inputRelease  !== '' || inputRevision) {
      try {
        const response = await axios.post(`http://192.168.18.50:3001/api/items`, {
          "id": inputID,
          "name": inputName,
          "description": inputDescription,
          "logo": inputLogo,
          "dateRelease": inputRelease,
          "dateRevision": inputRevision,
        });
        console.log('post completado')
        onClose()
      } catch (error) {
        console.error(error);
      }
    }
  }
  const resetText = () => {
    setInputID('')
    setInputName('')
    setInputDescription('')
    setInputLogo('')
    setInputRelease('')
    setInputRevision('')

    setValID(null)
    setValName(null)
    setValDescription(null)
    setValLogo(null)
    setValRelease(null)
    setValRevision(null)
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View  style={styles.container}>
        <Text style={styles.id}>
          Formulario de Registro</Text>

        <View style={[styles.textContent]}>
          <Text style={styles.textTitle}>
            ID:</Text>
          <TextInput
            style={[styles.input, valID === false ? styles.noValidated : '']}
            placeholder="..."
            value={inputID}
            placeholderTextColor="#ccc"
            onChangeText={validationID}
          />
          { 
            valID === null
            ? ''
            : !valID &&
              <Text style={styles.errorVal}>
              ID invalido (min 3 y max 10)</Text>
          }
          
        </View>
        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Nombre:</Text>
          <TextInput
            style={[styles.input, valName === false ? styles.noValidated : '']}
            placeholder="..."
            value={inputName}
            placeholderTextColor="#ccc"
            onChangeText={validationName}
          />
          { 
            valName === null
            ? ''
            : !valName &&
              <Text style={styles.errorVal}>
              Nombre invalido (min 5 y max 100)</Text>
          }
        </View>
        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Descripción:</Text>
          <TextInput
            style={[styles.input, valDescription === false ? styles.noValidated : '']}
            placeholder="..."
            value={inputDescription}
            placeholderTextColor="#ccc"
            onChangeText={validationDescription}
          />
          { 
            valDescription === null
            ? ''
            : !valDescription &&
              <Text style={styles.errorVal}>
              Descripción invalida (min 10 y max 200)</Text>
          }
        </View>
        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Logo:</Text>
          <TextInput
            style={styles.input}
            placeholder="http://..."
            value={inputLogo}
            placeholderTextColor="#ccc"
            onChangeText={setInputLogo}
          />
        </View>
      
        <View style={[styles.textContent]}>
          <Text style={styles.textTitle}>
            Fecha liberación: {String(new Date(inputRelease))}</Text>
          <TextInput
            style={[styles.input, valRelease === false ? styles.noValidated : '']}
            placeholder="AAAA-mm-dd"
            value={inputRelease}
            placeholderTextColor="#ccc"
            onChangeText={validationRelease}
          />
          { 
            valRelease === null
            ? ''
            : !valRelease &&
              <Text style={styles.errorVal}>
              Fecha de liberación invalida (debe ser igual o mayor a la fecha actual)</Text>
          }
        </View>
        <View style={[styles.textContent, styles.mb]}>
          <Text style={styles.textTitle}>
            Fecha revisión:</Text>
          <TextInput
            style={[styles.input, valRevision === false ? styles.noValidated : '']}
            placeholder="AAAA-mm-dd"
            value={inputRevision}
            placeholderTextColor="#ccc"
            onChangeText={validationRevision}
          />
          { 
            valRevision === null
            ? ''
            : !valRevision &&
              <Text style={styles.errorVal}>
              Fecha de revisión invalida (debe ser exactamente un año posterior a la fecha de liberación)</Text>
          }
        </View>
        <Pressable style={styles.addBtn} onPress={postItems}>
          <Text style={styles.addBtnText}>* Enviar</Text>
        </Pressable>
        
        <Text> </Text>
         <Pressable style={styles.delBtn} onPress={resetText}>
          <Text style={styles.addBtnText}>-Reiniciar</Text>
        </Pressable>
        
        <Text> </Text>
         <Pressable style={styles.closeBtn} onPress={onClose}>
          <Text style={styles.addBtnText}>x Cerrar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    height: 60,
    backgroundColor: '#44FF59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  addBtnText: {   
    fontSize: 16,
    fontWeight: 'bold'
  },
  delBtn: {
    height: 60,
    backgroundColor: '#52C1E4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  closeBtn: {
    height: 60,
    backgroundColor: '#52C1E4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  scrollViewContent: {
  },
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: '#393F4D',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  id: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  info: {
    fontSize: 25,
    marginBottom: 20,
    color: '#717171',
  },
  imageCard: {
    height: 100,
    width: 161,
    marginTop: 5,
    marginHorizontal: 'auto'
  },
  textContent: {
    marginTop: 15
  },
  textContentRow: {
  },
  textTitle: {
    fontSize: 16,
    color: '#ccc',
    
  },
  errorVal: {
    color: '#FF4C59',
    fontSize: 14,
    fontWeight: 'bold'
  },
  noValidated: {borderColor: '#FF4C59',},
  text: {
    color: '#fff',
    fontSize: 16,
  },
  mb: {
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: '#717171',
    borderWidth: 1,
    width: '100%',
    fontSize: 16,
    paddingHorizontal: 15,
    marginTop: 5,
    borderRadius: 5,
    color: '#fff'
  },
});

export default ItemAdd;
