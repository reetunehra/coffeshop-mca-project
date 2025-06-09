
def get_chatbot_response(client, model_name, messages, temperature=0):
    input_messages = []
    for message in messages:
        input_messages.append({"role": message["role"], "content": message["content"]})
    
    response = (
        client.chat.completions.create(
            model=model_name,
            messages=input_messages,
            temperature=temperature,
            top_p=0.8,
            max_tokens=2000,
        )
        .choices[0]
        .message.content
    )

    return response

def get_embedding(embedding_client, model_name, text_input):
    output = embedding_client.embeddings.create(input=text_input, model=model_name)

    embeddings = []
    for embedding_object in output.data:
        embeddings.append(embedding_object.embedding)

        return embeddings
     
def double_check_json_output(client,model_name,json_string):
    # prompt = f""" You will check this json string and correct any mistakes that will make it invalid. Then you will return the corrected json string. Nothing else. 
    # If the Json is correct just return it.
    
    # **Important:**
    #  - If the Json is correct just return it.
    #  - Only output the JSON string, nothing else.
    #  - Do not add any explanations, comments, or formatting.
    #  - If there is any extra text before or after the JSON, remove it.
    #  - The first character should be the opening curly brace and the last character should be the closing curly brace.
    # If there is any text before order after the json string, remove it.
    # Do NOT return a single letter outside of the json string.
    # The first thing you write should be open curly brace of the json and the last letter you write should be the closing curly brace.

    # You should check the json string for the following text between triple backticks:
    # ```
    # {json_string}
    # ```
    # """
    prompt = f""" You will check the following JSON string for any syntax errors or invalid structure. If it is invalid, correct it and output the corrected JSON string. If it is valid, output it exactly as is.

    **Important:**
    - If the Json is correct just return it.
    - Only output the JSON string, nothing else.
    - Do not add any explanations, comments, or formatting.
    - If there is any extra text before or after the JSON, remove it.
    - The first character should be the opening curly brace and the last character should be the closing curly brace.

    Here is the JSON string to check:

    {json_string}
    """

    messages =[{"role":'user',"content":prompt}]
    response = get_chatbot_response(client,model_name,messages)
    #response = response.replace("`","")
    return response

def ensure_alternating_roles(messages):
    """
    After the system prompt, messages must alternate user/assistant/user/assistant...
    This function auto-fixes if roles do not alternate perfectly.
    """
    roles = [m["role"] for m in messages]
    if not roles:
        return messages

    # After system, expected alternating roles
    expected_roles = ["user", "assistant"] * (len(messages) // 2 + 1)
    expected_roles = expected_roles[:len(messages)]

    fixed_messages = [messages[0]]  # keep the system message

    # Start alternation after system prompt
    idx = 1
    last_role = None
    for msg in messages[1:]:
        role = msg["role"]
        if role == last_role:
            # Skip duplicate roles, only keep alternating ones
            continue
        fixed_messages.append(msg)
        last_role = role

    return fixed_messages
