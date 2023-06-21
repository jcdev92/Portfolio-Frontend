import React, { useState, useEffect } from "react";
import {
  Spinner,
  Card,
  TextInput,
  Label,
  Textarea,
  Button,
} from "flowbite-react";
import axios from "axios";

export const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "http://localhost:9000/api/v1/user";
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          Authorization: `jwt ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data[0]);
        setProfile(res.data.data[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" color="info" />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Card className="lg:w-8/12 m-4">
        <form className="flex flex-col gap-4">
          <div id="info" className="lg:grid gap-4 grid-cols-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                placeholder={profile.firstName}
                required
                type="text"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="lastname" value="Your lastname" />
              </div>
              <TextInput
                id="lastname"
                placeholder={profile.lastName}
                required
                type="text"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder={profile.email}
                required
                type="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Your phone" />
              </div>
              <TextInput
                id="phone"
                placeholder={profile.phone}
                required
                type="text"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="profileImg" value="Your profile image" />
              </div>
              <TextInput
                id="profileImg"
                placeholder={profile.profileImg}
                required
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFot="jobTitle" value="Your job title" />
            </div>
            <TextInput
              id="jobTitle"
              placeholder={profile.jobTitle}
              required
              type="text"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="aboutMe" value="About me description" />
            </div>
            <Textarea
              id="aboutMe"
              placeholder={profile.aboutMe}
              required
              rows={4}
            />
          </div>
          <div className="flex flex-row justify-around">
            <div className="mb-2 block">
              <Button gradientDuoTone="purpleToBlue" outline>
                Update profile
              </Button>
            </div>
            <div className="mb-2 block">
              <Button gradientDuoTone="greenToBlue" outline>
                Get profile
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};
