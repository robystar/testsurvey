import React from "react";
import * as Survey from "survey-react";
import * as widgets from "surveyjs-widgets";
import "survey-react/survey.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import "pretty-checkbox/dist/pretty-checkbox.css";

import { json } from "./survey_json";
//import { json, pippo } from "./products";
import { pippo } from "./pippo";
import { json as jsonRichiedenti }  from "./richiedenti";

import { Anagrafica } from "./anagrafica";


import { createDocument } from "./api";

//import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
//require("icheck");

export { MyQuestion } from "./MyQuestion";

Survey.StylesManager.applyTheme("default");

//widgets.icheck(Survey, $);
widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
//widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

var storageName = "survey_prova";

Anagrafica();

function saveSurveyData(sender) {
    var data = sender.data;
    data.pageNo = sender.currentPageNo;
    createDocument(data);
    window
        .localStorage
        .setItem(storageName, JSON.stringify(data));
}

function onAfterRenderPage(survey) {
  console.log(survey);
  const prevData = window.localStorage.getItem(storageName) || null;
  if (prevData) {
    var data = JSON.parse(prevData);
    survey.data = data;
    if (data.pageNo) {
      survey.currentPageNo = data.pageNo;
    }
  }
} 


function onValueChanged(sender) {
    console.log("value changed!");
}


function onComplete(sender, options) {
    console.log(sender.data);
    saveSurveyData(sender);
    document
        .querySelector('#surveyResult')
        .textContent = "Dati JSON:\n" + JSON.stringify(sender.data, null, 3);
};

function onPartialSend(sender){
    console.log(sender.data);
    saveSurveyData(sender);
}


export function SurveyPage() {

    const model = new Survey.Model(jsonRichiedenti);
    model.locale = "it";

    return (
    <div className="container">
        <h2>SurveyJS Library - prove a caso</h2>
        <Survey.Survey
            sendResultOnPageNext={true}
            model={model}
            onComplete={onComplete}
            onValueChanged={onValueChanged}
            onPartialSend={onPartialSend}
            onAfterRenderPage={onAfterRenderPage}
          />
        <pre><div id="surveyResult"></div></pre>
    </div>
    );
  }
  