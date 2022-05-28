package com.springboot.userservice.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import com.google.gson.Gson;
import com.springboot.userservice.dto.request.SearchFilterRequest;
import com.springboot.userservice.dto.response.ActivityResponseDto;
import com.springboot.userservice.entity.Activity;
import com.springboot.userservice.entity.ActivityResult;
import com.springboot.userservice.entity.ActivityState;
import com.springboot.userservice.repository.ActivityRepository;
import com.springboot.userservice.repository.ActivityResultRepository;
import com.springboot.userservice.repository.ActivityStateRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class ActivityServiceImpl implements ActivityService {

    private final ActivityRepository activityRepository;

    private final ActivityResultRepository activityResultRepository;

    private final ActivityStateRepository activityStateRepository;

    @Override
    public Activity saveActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    @Override
    public List<ActivityResponseDto> getAllActivitiesWithFilter(SearchFilterRequest searchFilterRequest) {
        return activityRepository.getAllActivitiesWithFilter(new Gson().toJson(searchFilterRequest))
                .stream().map(ActivityResponseDto::new).collect(Collectors.toList());
    }

    @Override
    public Activity getActivityById(Integer id) {
        return activityRepository.findById(id);
    }

    @Override
    public ActivityState getActivityStateById(Integer id) {
        return activityStateRepository.findById(id);
    }

    @Override
    public ActivityResult getActivityResultById(Integer id) {
        return activityResultRepository.findById(id);
    }

    @Override
    public Long deleteActivityById(Integer id) {
        return activityRepository.deleteById(id);
    }

}