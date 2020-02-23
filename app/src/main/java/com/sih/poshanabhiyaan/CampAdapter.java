package com.sih.poshanabhiyaan;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class CampAdapter extends RecyclerView.Adapter<CampAdapter.CampViewHolder> {

    private ArrayList<CampRecyclerItem> campRecyclerItems;

    public CampAdapter(ArrayList<CampRecyclerItem> campRecyclerItems){
        this.campRecyclerItems = campRecyclerItems;
    }


    @NonNull
    @Override
    public CampViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.camps_recycler_item, parent, false);
        CampViewHolder campViewHolder = new CampViewHolder(view);

        return  campViewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull CampViewHolder holder, int position) {
        CampRecyclerItem currentItem = campRecyclerItems.get(position);

        holder.tvTitle.setText(currentItem.getTitle());
        holder.tvDesc.setText(currentItem.getDesc());
    }

    @Override
    public int getItemCount() {
        return campRecyclerItems.size();
    }

    public static class CampViewHolder extends RecyclerView.ViewHolder{

        public TextView tvTitle;
        public TextView tvDesc;

        public CampViewHolder(@NonNull View itemView) {
            super(itemView);
            tvTitle = itemView.findViewById(R.id.tv_camp_name);
            tvDesc = itemView.findViewById(R.id.tv_camp_desc);
        }
    }
}
