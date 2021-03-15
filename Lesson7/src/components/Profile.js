import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store/profile/actions";

export default function Home() {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const setName = useCallback(() => {
    dispatch(changeName("New name"));
  }, [dispatch]);

  return (
    <>
      <h4>Profile</h4>
      <span>
        {profile.name}: {profile.age}
      </span>
      <button onClick={setName}>Change name</button>
    </>
  );
}
