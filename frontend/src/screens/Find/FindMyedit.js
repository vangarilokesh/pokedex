import * as tf from "@tensorflow/tfjs";
import idx2class1 from "./classIdxDict2";

import React, { useState, useEffect } from "react";
import "./Find.css";

const Find = () => {
  // usestate for setting a javascript
  // object for storing and using data
  const [file, setFile] = useState(null);
  //   const [model, setModel] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [topkPredNames, setPrediction] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const [model, setModel] = useState(null);
  function readImage(file) {
    return new Promise((rs, rj) => {
      const fileReader = new FileReader();
      fileReader.onload = () => rs(fileReader.result);
      fileReader.onerror = () => rj(fileReader.error);
      fileReader.readAsDataURL(file);
    });
  }

  async function handleImgUpload(event) {
    const {
      target: { files },
    } = event;

    const _file = files[0];
    const fileData = await readImage(_file);
    setFile(fileData);
    setProcessing(true);
  }

  const MODEL_HTTP_URL = "api/pokeml/classify";
  const MODEL_INDEXEDDB_URL = "indexeddb://poke-model";

  const getTopKPred = (pred, k) => {
    const predIdx = [];
    const predNames = [];

    const topkPred = [...pred].sort((a, b) => b - a).slice(0, k);
    console.log(topkPred);
    topkPred.map((i) => predIdx.push(pred.indexOf(i)));
    predIdx.map((i) => predNames.push([idx2class1[i],"----->",topkPred[Math.round(predIdx.indexOf(i))]]));
    console.log(predNames);
    return predNames;
  };

  const getTopKPredPokeObj = (pred, k) => {
    // const foundPokeObj = [];
    const predPokeName = getTopKPred(pred, k);
    console.log(predPokeName);
    // predPokeName.map((name) =>
    //   foundPokeObj.push(pokeObjFromName(name, pokeObjList))
    // );

    return predPokeName;
  };
  useEffect(() => {
    async function fetchModel() {
      try {
        const localClassifierModel = await tf.loadLayersModel(
          MODEL_INDEXEDDB_URL
        );

        setModel(localClassifierModel);
        console.log("Model loaded from IndexedDB");
      } catch (e) {
        try {
          const classifierModel = await tf.loadLayersModel(MODEL_HTTP_URL);

          console.log(classifierModel);
          setModel(classifierModel);
          console.log("Model Loaded");
          await classifierModel.save(MODEL_INDEXEDDB_URL);
          console.log("Model saved to IndexedDB");
        } catch (e) {
          console.log("Unable to load model at all: ", e);
        }
      }
    }
    fetchModel();
  }, []);
  useEffect(() => {
    async function predict() {
      if (imageLoaded && file) {
        const imageElement = document.createElement("img");
        imageElement.src = file;

        imageElement.onload = async () => {
          const tensor = tf.browser
            .fromPixels(imageElement)
            .resizeNearestNeighbor([120, 120])
            .toFloat()
            .sub(127)
            .div(127)
            .expandDims();

          const y_pred = await model.predict(tensor).data();
          //   console.log(y_pred);
          // console.log(pokemonState);

          const topkPredNames = getTopKPredPokeObj(y_pred, 3);

          //   dispatch(setePredictions({ predictions: topkPredNames }));
          setPrediction(topkPredNames);
          console.log(topkPredNames);
          console.log("-----------");
          //console.log(prediction);
          setProcessing(false);
          setImageLoaded(false);
          return topkPredNames;
          //   setPrediction(parseInt(prediction, 10));
        };
      }
    }

    predict();
  }, [imageLoaded, model, file]);

  return (
    <div
      style={{
        backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7cb648d-bbe0-4ce6-880e-78efb2389f22/d5w242c-84ec6430-394c-4fb1-a650-a3d10b3ccb73.jpg/v1/fill/w_1024,h_576,q_75,strp/pokemon_wallpaper_by_arikalp_d5w242c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvYzdjYjY0OGQtYmJlMC00Y2U2LTg4MGUtNzhlZmIyMzg5ZjIyXC9kNXcyNDJjLTg0ZWM2NDMwLTM5NGMtNGZiMS1hNjUwLWEzZDEwYjNjY2I3My5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FWwZ5T1-pCu7lBazDW94s3PQSdJZcLbZpLjGLXVCoQM")`,
      }}
      className="predict"
    >
      <form className="Form">
        <label htmlFor="upload-image">Upload image</label><br/><br/>
        <input
          id="image-selector"
          type="file"
          name="upload-image"
          accept="image/*"
          className="File-selector"
          onChange={handleImgUpload}
          disabled={!model || processing}
        />
      </form>
      <div className="Img-display-container">
        <img
          onLoad={() => {
            setImageLoaded(true);
          }}
          alt=""
          src={file}
        />
      </div>
      <div className="Img-processing-container">
        {processing ? (
          <p>Loading ...</p>
        ) : topkPredNames !== null ? (
          <div>
            <b>{topkPredNames[0]}</b> <br/>
            <b>{topkPredNames[1]}</b> <br/>
            <b>{topkPredNames[2]}</b> <br/>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Find;