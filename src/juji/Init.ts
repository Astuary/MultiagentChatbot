const fetch = require("node-fetch");

const url = "https://juji.ai/api/graphql";

// To create engagement
// Set useDefault to true in the input to start your engagement 
// with default persona and config-doc.

export const get_brand = async (token: string) => {
    const GET_BRAND = `
        query GetMe{
            getMe{
                name
            }
        }
    `;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify({
        query: GET_BRAND,
        //variables: {input: { email, password}},
        }),
    })

    const {data, errors} = await response.json();

    return data.getMe.name;
};

export const create_engagement = async (token: string, brand_name: string) => {

    const eng1 = {
        "brandName": brand_name, 
        "description": "testing 1", 
        "greeting": "ello", 
        "name": "roboK", 
        "useDefault": true
    } 

    const eng2 = {
        "brandName": brand_name, 
        "description": "testing 2", 
        "greeting": "hi", 
        "name": "roboN", 
        "useDefault": true
    } 

    const eng3 = {
        "brandName": brand_name, 
        "description": "testing 3", 
        "greeting": "hola", 
        "name": "roboB", 
        "useDefault": true
    } 

    const CREATE_ENGAGEMENT = `
        mutation CreateEngagement($input: CreateEngagementInput!){
            createEngagement(input: $input) {
                engagement{
                    name 
                    id 
                    order 
                    status
                }
            }
        }
    `

    var response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify({
        query: CREATE_ENGAGEMENT,
        variables: {input: eng1},
        }),
    })

    var {data, errors} = await response.json();
    await console.log(data, errors);

    var response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify({
        query: CREATE_ENGAGEMENT,
        variables: {input: eng2},
        }),
    })

    var {data, errors} = await response.json();
    await console.log(data, errors);

    var response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify({
        query: CREATE_ENGAGEMENT,
        variables: {input: eng3},
        }),
    })

    var {data, errors} = await response.json();
    await console.log(data, errors);
};

export const get_eng = async (token: string, brand_name: string) => {
    const GET_ENGAGEMENTS = `
        query Engagements($brandName: String!) {
            getEngagementsByBrand(brandName: $brandName) {
                name
                id
                order
                status
            }
        }
    `;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify({
        query: GET_ENGAGEMENTS,
        variables: { "brandName": brand_name},
        }),
    })

    const {data, errors} = await response.json();

    await console.log(data);

    return data;
};

export const update_eng = async (eng_id: string, token: string, ) => {

    const config = {"faq": [eng_id],
    "items":
    {"9":
     {"sub-type": "fb-email",
      "settings": {"required": true, "delay-start": 0},
      "label": "Collecting Facebook email",
      "id": 9,
      "name": "T9",
      "content":
      [{"text": "Please click on the email to confirm.", "repeatable": true}],
      "type": "request",
      "description": "Collect opt-in Facebook email",
      "actions": [],
      "topic": "juji.topics.interviewing.v4/collect-fb-email"},
     "3":
     {"id": 3,
      "name": "T3",
      "type": "remark",
      "topic": "juji.topics.interviewing.v4/display-personalized-message",
      "traits":
      [{"code": "co400",
        "name": "smart shopper",
        "skip": false,
        "message":
        ["From your chat, you seem analytical and smart. You'd appreciate our product, which is backed by years of research and testing."],
        "description": "who are analytical and make informed economic decisions"},
       {"code": "co500",
        "name": "DIYer",
        "skip": false,
        "message":
        ["You seem a very capable individual and values the quality of a product. Check out ours that provides a high value and durability."],
        "description":
        "who are anti-materialistic and shop for value, durability, and comfort"},
       {"code": "co300",
        "name": "explorer",
        "skip": false,
        "message":
        ["From our chat, you seem very open-minded and having a unique taste. Check out our product for a fresh and unique experience."],
        "description":
        "who emphasize identity and enjoy new and unique experiences"},
       {"code": "co200",
        "name": "achiever",
        "skip": false,
        "message":
        ["You seem goal-oriented. Here are the product reviews that may help you evaluate how our product meets your needs."],
        "description":
        "who are goal-oriented and make economic decisions based on the needs of career and family"},
       {"code": "co100",
        "name": "sophisticated shopper",
        "skip": false,
        "message":
        ["You have a sophisticated taste and love finer things. We have an authentic product that will meet your standard."],
        "description": "who are successful and have a sophisticated taste"},
       {"code": "co600",
        "name": "value shopper",
        "skip": false,
        "message":
        ["From our chat, you seem a thoughtful person and stressing the real value of a product. Here are the reviews that would probably help you evaluate the value of our product."],
        "description": "who are cautious and prefer big, well-known brands"},
       {"code": "co700",
        "name": "aspiring shopper",
        "skip": false,
        "message":
        ["You seem loving fun and trendy stuff. What would be better to experience our fun product with style?"],
        "description":
        "who enjoy shopping as social activities, and love fun and trendy stuff"}],
      "settings": {"delay-start": 0},
      "sub-type": "shopper-dna",
      "description": "Display a personalized plain text message"},
     "4":
     {"sub-type": "plain-text",
      "settings": {"delay-start": 0},
      "label": "Chatbot says good bye",
      "end-type": "regular",
      "id": 4,
      "name": "Wrap-up",
      "content":
      ["`(user-first-name)`, thank you again for chatting w/ me! You can sign up to create your own version of me: https://juji.ai/signup. \n See u later!"],
      "type": "remark",
      "cid": "juji.topics.interviewing.v4/final-closing-leave",
      "category": "General chitchat",
      "end": true,
      "description": "Says goodbye and ends the chat",
      "topic": "juji.topics.interviewing.v4/final-closing-leave"},
     "8":
     {"sub-type": "yes-or-no",
      "settings": {"required": true, "delay-start": 0},
      "label": "Do you have a coupon?",
      "id": 8,
      "name": "T8",
      "content": [{"text": "Do you have a coupon?"}],
      "type": "request",
      "description": "Ask a yes-no question",
      "actions": [],
      "topic": "juji.topics.interviewing.v4/ask-general-question-yes-no"},
     "7":
     {"template-type": "generic",
      "sub-type": "facebook-choice",
      "settings": {"required": true, "delay-start": 0},
      "trigger-counter": 3,
      "label": "What are you looking for?",
      "id": 7,
      "name": "T7",
      "choices":
      [{"text": "Buy a product", "value": 0},
       {"text": "See new collections", "value": 1},
       {"text": "Pricing", "value": 2}],
      "type": "request",
      "elements":
      [{"title": "What are you looking for?",
        "buttons":
        [{"type": "postback", "title": "Buy a product", "payload": "0"},
         {"type": "postback", "title": "See new collections", "payload": "1"},
         {"type": "postback", "title": "Pricing", "payload": "2"}],
        "subtitle": "",
        "image-url": ""}],
      "description": "Collect user input in a GUI",
      "actions":
      [{"trigger":
        {"name": "trigger-1",
         "operands":
         [{"operand":
           {"value": 1, "operator": "choice-is", "operand-name": "operand-1"},
           "operator": "no-op"}],
         "operator": "and"},
        "followups": [6],
        "quick-ack": "Let me as you a quick question."},
       {"trigger":
        {"name": "trigger-2",
         "operands":
         [{"operand":
           {"value": 2, "operator": "choice-is", "operand-name": "operand-1"},
           "operator": "no-op"}],
         "operator": "and"},
        "advanced": {"jump": true, "jump-to-topic": 9},
        "quick-ack": "Books are $2 each; games are $5 each"}],
      "topic":
      "juji.topics.interviewing.v4/collect-basic-info-from-gui-w-attribute"},
     "5":
     {"sub-type": "free-text",
      "settings":
      {"required": true,
       "delay-start": 0,
       "min-input-len": 5,
       "allow-i-dont-know": false,
       "gibberish-detection": true},
      "label": "How are you doing?",
      "id": 5,
      "name": "T5",
      "content": [{"text": "How are you doing?", "repeatable": true}],
      "type": "request",
      "cid": "juji.topics.interviewing.v4/ask-how-are-you-doing",
      "category": "General chitchat",
      "description": "Ask how a user is doing",
      "actions": [],
      "topic": "juji.topics.interviewing.v4/ask-how-are-you-doing"},
     "6":
     {"sub-type": "single-choice",
      "scale": "nominal",
      "settings": {"required": true, "delay-start": 0},
      "label": "What game do you play the most?",
      "id": 6,
      "name": "T6",
      "content": [{"text": "What game do you play the most?"}],
      "choices": [{"text": "MHW", "value": 0}, {"text": "The Witcher", "value": 1}],
      "type": "request",
      "precondition":
      [{"operand":
        {"name": 7,
         "trigger": "trigger-1",
         "operator": "triggered-by",
         "predicate-type": "topic-specific"},
        "operator": "no-op",
        "predicate-type": "composite"}],
      "description": "Collect user input in a GUI",
      "actions": [],
      "topic":
      "juji.topics.interviewing.v4/collect-basic-info-from-gui-w-attribute"},
     "1":
     {"template-type": "generic",
      "sub-type": "facebook-media",
      "settings": {"delay-start": 0},
      "id": 1,
      "name": "T1",
      "type": "remark",
      "elements":
      [{"title": "We have two departments!",
        "buttons":
        [{"url": "https://www.facebook.com/Juji-AI-Chatbot-Demo-109315067094969",
          "title": "Books"},
         {"url": "https://en.wikipedia.org/wiki/Game", "title": "Games"}],
        "subtitle": "Please feel free to look around.",
        "image-url":
        "https://upload.wikimedia.org/wikipedia/commons/4/45/ChristmasMarketJena.jpg"}],
      "description": "Display a facebook media form",
      "topic": "juji.topics.interviewing.v4/display-gui"},
     "0":
     {"sub-type": "plain-text",
      "settings": {"delay-start": 0},
      "id": 0,
      "name": "Welcome",
      "content":
      ["Hello, `(user-first-name)`, thanks for connecting! I am your AI helper and cannot wait to chat w/ you."],
      "type": "remark",
      "cid": "juji.topics.interviewing.v4/rep-tell",
      "category": "Provide user with information in general",
      "description": "Display a plain text message",
      "topic": "juji.topics.interviewing.v4/rep-tell"},
     "2":
     {"id": 2,
      "name": "T2",
      "type": "remark",
      "topic": "juji.topics.interviewing.v4/web-media",
      "elements":
      [{"link":
        {"url": "https://www.facebook.com/Juji-AI-Chatbot-Demo-109315067094969",
         "text": "Books"},
        "text": "Or you can take a look at web media:",
        "image-url":
        "https://upload.wikimedia.org/wikipedia/commons/4/45/ChristmasMarketJena.jpg"}],
      "settings": {"delay-start": 0},
      "sub-type": "web-media",
      "description": "Display a web media form"}},
    "agenda": [0, 5, 1, 2, 7, 8, 6, 9, 3, 4],
    "version": "3.0.4",
    "requires":
    "[[juji.topics.fallback.chatflow.v1 :as fallback.chatflow] [juji.topics.fallback.exception.v1 :as fallback.exception] [juji.topics.fallback.qa.v1 :as fallback.qa] [juji.topics.fallback.request.v1 :as fallback.request] [juji.topics.fallback.social.v2 :as fallback.social] [juji.topics.interviewing.v4 :as interviewing] [juji.concept.basic :as concept] [juji.expressions.rep.basic :as rep]]",
    "settings":
    {"thin-text-threshold": 5,
     "translations":
     [{"cid": "juji.topics.fallback.qa.v1/translate-how-about-you",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.qa.v1/translate-how-about-you",
       "description": "Handles a user's reciprocal question to the chatbot"}],
     "task-completion-code": false,
     "between-response-delay": 1500,
     "session-duration-max": 60,
     "turn-pace": 0,
     "ad-lib":
     [{"cid": "juji.topics.fallback.chatflow.v1/handle-missed-user-answers",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.chatflow.v1/handle-missed-user-answers",
       "description": "Handles a chatbot missed user answers"},
      {"cid": "juji.topics.fallback.chatflow.v1/handle-user-excuses",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.chatflow.v1/handle-user-excuses",
       "description":
       "Handles a user's various \"excuses\" not answering a question"},
      {"cid": "juji.topics.fallback.chatflow.v1/handle-chat-flow",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.chatflow.v1/handle-chat-flow",
       "description": "Handles a user' input regarding the chat flow."},
      {"cid": "juji.topics.fallback.chatflow.v1/handle-skip",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.chatflow.v1/handle-skip",
       "description": "Handles a user's request to skip certain parts of a chat"},
      {"cid": "juji.topics.fallback.request.v1/handle-user-requests",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.request.v1/handle-user-requests",
       "description": "Handle a user's requests during a chat"},
      {"cid": "juji.topics.fallback.social.v2/echo-user-input",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.social.v2/echo-user-input",
       "description": "Handles users' chitchat input"},
      {"cid": "juji.topics.fallback.qa.v1/handle-user-questions-engagement",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.qa.v1/handle-user-questions-engagement",
       "description": "Answer a user's questions about the chat"},
      {"cid": "juji.topics.fallback.qa.v1/handle-user-questions-rep",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.qa.v1/handle-user-questions-rep",
       "description": "Answer a user's questions about the chatbot"},
      {"cid": "juji.topics.fallback.qa.v1/handle-user-questions-juji",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.qa.v1/handle-user-questions-juji",
       "description": "Answer a user's questions regarding Juji"},
      {"cid": "juji.topics.fallback.qa.v1/handle-user-questions-general",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.qa.v1/handle-user-questions-general",
       "description": "Answer a user's general questions"},
      {"cid": "juji.topics.fallback.chatflow.v1/handle-user-clarification",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.chatflow.v1/handle-user-clarification",
       "description": "Respond to a user's request for clarification"},
      {"cid": "juji.topics.fallback.chatflow.v1/handle-no-knowledge",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.chatflow.v1/handle-no-knowledge",
       "description": "Handles when a user claims that s/he has not knowledge"},
      {"cid": "juji.topics.fallback.social.v2/comment-user-input",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.social.v2/comment-user-input",
       "description": "Comment on a user's input"},
      {"cid":
       "juji.topics.fallback.exception.v1/handle-user-questions-not-answered",
       "skip": false,
       "type": "fallback",
       "topic":
       "juji.topics.fallback.exception.v1/handle-user-questions-not-answered",
       "needed": true,
       "parameters":
       [{"name": "default-response-to-question",
         "value-path": ["settings", "default-response-to-question"]}],
       "description": "Handles user questions that a chatbot cannot answer"},
      {"cid": "juji.topics.fallback.exception.v1/handle-gibberish",
       "skip": false,
       "type": "fallback",
       "topic": "juji.topics.fallback.exception.v1/handle-gibberish",
       "description": "Handle a user's gibberish input"}],
     "persona":
     {"personality": "default",
      "bio":
      "Hi, I'm Juji, the quintessential default REP. I'm known for my winning personality and great sense of humor.",
      "image": "/assets/img/content/juji-profile.png",
      "info": "neutral stock persona",
      "name": "Juji",
      "image-sm": "/assets/img/content/juji-chat-profile-sm.png",
      "cid": "juji",
      "image-lg": "/assets/img/content/juji-chat-profile-lg.png",
      "background": "#8BDFCD"}}};

    const UPDATE_CONFIG = `
        mutation UpdateChatConfig($input: UpdateChatConfigInput!){
            updateChatConfig(input: $input) {
                message
                success
            }
        }
    `;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify({
        query: UPDATE_CONFIG,
        variables: { input: {"document": config, "engagementId": eng_id, "isJson": true} },
        }),
    })

    const {data, errors} = await response.json();

    await console.log(data, errors);

};

export const release_eng = async (eng_id: string, token: string, ) => {
    const RELEASE_ENG = `
        mutation CreateRelease($input: CreateReleaseInput!){
            createRelease(input: $input) {
                id 
                order 
                type
            }
        }
    `;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify({
        query: RELEASE_ENG,
        variables: { input: {"engagementId": eng_id, "repeatable": true, "secret": "justtesting12345", "token": "isthisthesametoken?", "type": "web"} },
        }),
    })

    const {data, errors} = await response.json();

    await console.log(data, errors);

};