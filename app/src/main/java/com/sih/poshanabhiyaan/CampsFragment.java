package com.sih.poshanabhiyaan;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;

import models.Dose;
import models.DoseObject;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class CampsFragment extends Fragment {

    private String TAG = "CAMPS_FRAGMENT";

    private RecyclerView campRecyclerView;
    private RecyclerView.Adapter campAdapter;
    private RecyclerView.LayoutManager layoutManager;

    private View view;

    private ArrayList<CampRecyclerItem> campRecyclerItems;

    //    private JsonPlaceholderAPi jsonPlaceholderAPi;
    private PoshanAbhiyaanMongoApi poshanAbhiyaanMongoApi;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragment_camps, container, false);

        campRecyclerItems = new ArrayList<>();

        campRecyclerView = view.findViewById(R.id.camps_recycler_view);
        layoutManager = new LinearLayoutManager(this.getContext());

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(Utility.BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        poshanAbhiyaanMongoApi = retrofit.create(PoshanAbhiyaanMongoApi.class);


        getDoses();


        return view;
    }

    private void getDoses() {
        Call<DoseObject> call = poshanAbhiyaanMongoApi.getDoses();

        call.enqueue(new Callback<DoseObject>() {
            @Override
            public void onResponse(Call<DoseObject> call, Response<DoseObject> response) {

                if (!response.isSuccessful()) {
                    Log.d(TAG, "onResponse: !Unsuccessful");
                    return;
                }

                DoseObject doseObject = response.body();

                List<Dose> doses = doseObject.getDoses();

                for (Dose dose : doses) {
                    campRecyclerItems.add(new CampRecyclerItem(String.valueOf(dose.getId()), dose.getName(), dose.getStatus()));
                }

                setUpRecycler();
            }


            @Override
            public void onFailure(Call<DoseObject> call, Throwable t) {
                Log.d(TAG, "onFailure: " + t.getMessage());
            }
        });

    }

//    private void getPosts(){
//        Call<List<Post>> call = jsonPlaceholderAPi.getPosts(new Integer[] {1}, "id", "desc");
//
//        call.enqueue(new Callback<List<Post>>() {
//            @Override
//            public void onResponse(Call<List<Post>> call, Response<List<Post>> response) {
//                if(!response.isSuccessful()) return;
//
//                List<Post> posts = response.body();
//
//                for(Post post : posts){
//                    campRecyclerItems.add(new CampRecyclerItem(String.valueOf(post.getId()), post.getTitle(), post.getDesc()));
//                }
//
//                setUpRecycler();
//            }
//
//            @Override
//            public void onFailure(Call<List<Post>> call, Throwable t) {
//
//            }
//        });
//    }
//
//    private void getComments(){
//        Call<List<Comment>> call = jsonPlaceholderAPi.getComments(5);
//
//        call.enqueue(new Callback<List<Comment>>() {
//            @Override
//            public void onResponse(Call<List<Comment>> call, Response<List<Comment>> response) {
//                if(!response.isSuccessful()) return;
//
//                List<Comment> comments = response.body();
//
//                for(Comment comment : comments){
//                    campRecyclerItems.add(new CampRecyclerItem(String.valueOf(comment.getId()), comment.getEmail(), String.valueOf(comment.getPostId())));
//                }
//
//                setUpRecycler();
//            }
//
//            @Override
//            public void onFailure(Call<List<Comment>> call, Throwable t) {
//
//            }
//        });
//    }
//
//    private void createPost(){
//        Post post = new Post(23, "New Title", "New Text");
//
//        Call<Post> call = jsonPlaceholderAPi.createPost(post);
//
//        call.enqueue(new Callback<Post>() {
//            @Override
//            public void onResponse(Call<Post> call, Response<Post> response) {
//                if(!response.isSuccessful()) return;
//
//                Post postResponse = response.body();
//
//                campRecyclerItems.add(new CampRecyclerItem(String.valueOf(postResponse.getId()), postResponse.getTitle(), postResponse.getDesc()));
//
//                setUpRecycler();
//            }
//
//            @Override
//            public void onFailure(Call<Post> call, Throwable t) {
//
//            }
//        });
//    }

    private void setUpRecycler() {
        campAdapter = new CampAdapter(campRecyclerItems);

        campRecyclerView.setLayoutManager(layoutManager);
        campRecyclerView.setAdapter(campAdapter);
    }
}
