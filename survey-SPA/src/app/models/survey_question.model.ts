export class survey_question {
    survey_question_id; number;
    survey_id: number;
    question_order : number;
    question_label_fr : string;
    question_label_en : string;
    question_label_pt : string;
    created :  Date;
    updated :  Date;
    question_status : string;
    question_type : string;
}