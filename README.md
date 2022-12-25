# foodietection-expo

React Native Expo App for Thesis: Foodietection

  

# Converting model into TFLite-ready Model

cd to workspace/mobilenetv3 then
run:

```
tensorflowjs_converter --input_format=tf_saved_model --output_format=tfjs_graph_model --control_flow_v2=true Output\model_200000_b32\saved_model model_js/200000-batch32_v2
```

the syntax is
```tensorflowjs_converter --input_format=tf_saved_model --output_format=tfjs_graph_model --control_flow_v2=true [input path] [output path]```

# Merging .bin files into one file

open *CMD* cd to bin file locations
type group1-shard1of3.bin group1-shard2of3.bin group1-shard3of3.bin > mobilenetv3.bin

# Steps to re-train
1. Re-train the model with batch size 8, 1k steps.
2. Export the Model. Dapat wala yung error, dapat may lumabas na *Serve* folder. **This is what is needed to be fix before continuing sa conversion.**
3. Converting model see: [[#Converting model into TFLite-ready Model]]
4. Merge bin files see: [[#Merging .bin files into one file]]