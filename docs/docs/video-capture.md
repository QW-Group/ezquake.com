---
---

# Video capture

## Basic (demo playback only - use external application)

Available on all systems.

Use `/demo_capture start <time>` - ezQuake will create a folder called "capture_[starttime]" containing a sequence of screenshots and a .wav audio file. To stop
the capture early, use `/demo_capture stop`

To control the format & frequency of the screenshots, use `/sshot_format` & `/demo_capture_fps`.

An external application (such as [ffmpeg][ffmpeg]) can then be used to create the movie file. Example of ffmpeg command to compress using x264:

```
ffmpeg -i shot%06d.jpg -c:v libx264 -preset fast -crf 19 -c:a ac3 -b:a 256k -profile:v main -pix_fmt yuv420p -b-pyramid none output.mp4
```

## Create .avi directly (demo playback only - Windows only)

An extended form of the command is available on windows:

- `/demo_capture start <time> <avi-filename>`

This will create a .avi file instead of individual screenshots.

- `/demo_capture_codec`: sets the video codec used for compression (available codecs will be listed, if an invalid one is specified). If blank, video will be
  uncompressed.
- `/demo_capture_mp3`: if set, audio will be compressed
- `/demo_capture_mp3_kbps`: sets the bit-rate of audio if compressing to mp3

Recommended codec for this method is [x264vfw][x264vfw], or for lower-quality, xvid

Note that currently ezQuake uses the older AVIFile Windows API, and is limited to producing .avi files. .avi files can become corrupt once hitting a 2GB
filesize limit, use `/demo_capture_vid_maxlen` to split the capture up into multiple files, and then use a tool such as [ffmpeg][ffmpeg] to stitch them back
together again.

## Using screen capture tool

Alternatively you can use a screen capture tool such as [Obs][obs] or nvidia's [GeForce Experience][gfexp] to capture, although you may get mixed results with
gamma correction etc.

As ezquake is an OpenGL-based application, you may need to enable desktop capture in your video capture software.

[gfexp]: http://www.geforce.co.uk/geforce-experience/share

[x264vfw]: https://sourceforge.net/projects/x264vfw/

[ffmpeg]: https://www.ffmpeg.org/

[obs]: https://obsproject.com/
