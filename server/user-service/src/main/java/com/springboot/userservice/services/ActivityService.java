package com.springboot.userservice.services;

import java.util.List;

import com.springboot.userservice.dto.request.SearchFilterRequest;
import com.springboot.userservice.dto.response.ActivityResponseDto;
import com.springboot.userservice.entity.Activity;
import com.springboot.userservice.entity.ActivityResult;
import com.springboot.userservice.entity.ActivityState;

import org.springframework.stereotype.Service;

@Service
public interface ActivityService {

    public Activity saveActivity(Activity activity);

    public List<ActivityResponseDto> getAllActivitiesWithFilter(SearchFilterRequest searchFilterRequest);

    public Activity getActivityById(Integer id);

    public ActivityState getActivityStateById(Integer id);

    public ActivityResult getActivityResultById(Integer id);

    public Long deleteActivityById(Integer id);

}